import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import User from '../Models/UserSchema.js';

// Secret Key
const SECRET_KEY = "iwillbecomemillionaireby2028";

export const userSignup = (req , res) => {
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
            Message : `Please Fill All Feilds !!!`
        })
    }
    else{
        User.findOne({ email : email })
            .then((user) => {
                if(user){
                    console.log(`User Already Exist !!!`);
                }
                else{
                    bcrypt.hash(password , 10)
                        .then((hashedPassword) => {
                            console.log(hashedPassword);
                            // Save Details in DB
                            const newUser = new User({
                                name : name,
                                email : email,
                                password : hashedPassword,
                                role : role || 'NORMAL'
                            });
                            console.log(newUser);
                            newUser.save()
                                .then((savedUser) => {
                                    res.status(201).json({
                                        Message : `User Signup Successfull ...`,
                                        UserDetails : savedUser
                                    });
                                    console.log(savedUser);
                                })
                                .catch((error) => {
                                    res.status(500).json({
                                        Error : `Error in Saving User : ${error}`
                                    })
                                })
                        })
                        .catch((error) => {
                            res.status(500).json({
                                Error : `Error Occured While Hashing Password : ${error}`
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

export const userLogin = (req , res) => {
    const email = req.body.email;
    console.log(email);
    const password = req.body.password;
    console.log(password);
    if(!email || !password){
        res.status(400).json({
            Message : `Please Fill All Feilds !!!`
        })
    }
    else{
        User.findOne({ email : email})
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
                                // Defining Payload Data
                                const payload  = {
                                    user_id : user._id,
                                    email : email,
                                    role : user.role || 'NORMAL'
                                };
                                console.log(payload);
                                // Generate Token
                                const token = jwt.sign(payload , SECRET_KEY , { expiresIn : '10h'});
                                console.log(token);
                                // Setting Cookie and Sending to Client
                                res.cookie('JWT-TOKEN' , token , {
                                    maxAge: 3600000,
                                    sameSite: 'strict'
                                });
                                return res.status(200).json({
                                    Message: 'Login successful',
                                    token: token,
                                    userDetails: {
                                        name: user.name,
                                        email: user.email,
                                        role: user.role || 'NORMAL'
                                    }
                                })
                            }
                            else{
                                res.status(401).json({ 
                                    Error: `Invalid Credentials !!!` 
                                });
                            }
                        })
                        .catch((error) => {
                            res.status(401).json({ 
                                Error: `Invalid Credentials !!!` 
                            });
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