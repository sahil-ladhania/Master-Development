import User from "../Models/UserSchema.js";

export const isAuthorized = (req , res , next) => {
    const sessionID = req.cookies.SESSION_ID;
    console.log(sessionID);
    if(!sessionID){
        res.status(401).json({
            Message : `Please Login to Access this Resourse !!!`
        })
    }
    else{
        User.findOne({ sessionID : sessionID })
            .then((user) => {
                if(!user){
                    res.status(401).json({
                        Message : `Un-Authorized : User not Found !!!`
                    })
                }
                else{
                    req.user = user;
                    console.log(user);
                    next();
                }
            })
            .catch((error) => {
                res.status(401).json({
                    Error : `Un-Authorized : ${error}`
                })
            })
    }
}