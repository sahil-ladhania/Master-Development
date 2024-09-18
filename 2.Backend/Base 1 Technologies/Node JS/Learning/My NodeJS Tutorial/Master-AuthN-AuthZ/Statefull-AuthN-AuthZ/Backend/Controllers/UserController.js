import User from '../Models/UserSchema.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export const userSignup = (req , res) => {
    // Getting Credentials
    const name = req.body.name;
    console.log(name);
    const email = req.body.email;
    console.log(email);
    const password = req.body.password;
    console.log(password);
    const role = req.body.role;
    console.log(role);
    if(!name || !email || !password){
        res.status(400).json({
            Error : `Please Fill All Feilds !!!`
        });
    }
    else{
        // Hashing & Salting Password
        bcrypt.hash(password , 10)
            .then((hashedPassword) => {
                console.log(hashedPassword);
                User.findOne({email : email})
                    .then((user) => {
                        if(user){
                            console.log(`User Already Exist !!!`);
                        }
                        else{
                            // Generating SessionID
                            const sessionID = uuidv4();
                            console.log(`SessionID : ${sessionID}`);
                            const newUser = new User({
                                name : name,
                                email : email,
                                password : hashedPassword,
                                sessionID : sessionID,
                                role: role || 'NORMAL'
                            });
                            console.log(newUser);
                            // Saving User in DB
                            newUser.save()
                                .then((savedUser) => {
                                    // Setting Cookie and Sending to Client
                                    res.cookie('SESSION_ID' , sessionID , {
                                        maxAge: 3600000,
                                        sameSite: 'strict'
                                    });
                                    res.cookie('ROLE' , role , {
                                        maxAge: 3600000,
                                        sameSite: 'strict'
                                    });
                                    res.status(201).json({
                                        Message : `User Signup Successfull ...`,
                                        UserDetails : savedUser
                                    });
                                    console.log(savedUser);
                                })
                                .catch((error) => {
                                    res.status(500).json({
                                        Error : `Error in Signing Up : ${error}`
                                    })
                                    console.log(error);
                                })
                        }
                    })
                    .catch((error) => {
                        res.status(500).json({
                            Error : `Error in Finding User : ${error}`
                        })
                        console.log(error);
                    })
            })
            .catch((error) => {
                res.status(500).json({
                    Error : `Error in Hashing Passwords : ${error}`
                })
                console.log(error);
            })
    }
}

export const userLogin = (req , res) => {
    // Getting Credentials
    const email = req.body.email;
    console.log(email);
    const password = req.body.password;
    console.log(password);
    if(!email || !password){
        res.status(400).json({
            Error : `Please Fill All Feilds !!!`
        });
    }
    else{
        // Checking If User Exists or Not
        User.findOne({email : email})
            .then((user) => {
                if(!user){
                    res.status(404).json({
                        Message : `User Doesnt Exist !!!`
                    })
                }
                else{
                    // Compare Normal Password With Hashed Password
                    bcrypt.compare(password , user.password)
                        .then((result) => {
                            if(result){
                                // Compare SessionID Got From Cookie to the One Stored in DB
                                const sessionID = req.cookies['SESSION_ID'];
                                console.log(`SessionID Got From Client : ${sessionID}`);
                                const role = req.cookies['ROLE'];
                                console.log(`Role Got From Client : ${role}`);
                                if(!sessionID && !role){
                                    console.log(`Didnt Got Any SessionID & Role From Cookie !!!`);
                                }
                                else{
                                    User.findOne({sessionID : sessionID})
                                        .then((newUser) => {
                                            if(newUser){
                                                res.status(200).json({ 
                                                    Message: 'Login successful', 
                                                    UserDetails: newUser
                                                });
                                            }
                                            else{
                                                res.status(201).json({
                                                    Message : `Please Login Again To Continue !!!`
                                                })
                                            }
                                        })
                                        .catch((error) => {
                                            res.status(401).json({ 
                                                Error: `User Session Not Found : ${error}`
                                            });
                                        })
                                }
                            }
                            else{
                                res.status(401).json({ 
                                    Error: `Invalid Credentials !!!` 
                                });
                            }
                        })
                        .catch((error) => {
                            res.status(500).json({
                                Error : `Invalid Credentials : ${error}`
                            })
                        })
                }
            })
            .catch((error) => {
                res.status(500).json({
                    Error : `Error in Finding User : ${error}`
                })
            })
    }
}