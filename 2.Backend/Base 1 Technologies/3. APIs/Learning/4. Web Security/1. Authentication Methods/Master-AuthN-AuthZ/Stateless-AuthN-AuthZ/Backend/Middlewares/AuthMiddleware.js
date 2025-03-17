import jwt from 'jsonwebtoken';
import { verifyToken } from '../Helpers/VerifyToken.js';

// Secret Key
const SECRET_KEY = "iwillbecomemillionaireby2028";

export const isAuthorized = (req , res , next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if(authHeader && authHeader.startsWith('Bearer ')){
        const token = authHeader.split(' ')[1];
        console.log(token);
        console.log(typeof(token));
        // Verify JWT
        verifyToken(token , SECRET_KEY)
            .then((decodedData) => {
                console.log(typeof(decodedData));
                console.log(decodedData);
                // Retrieve for Role 
                const userRole = decodedData.role;
                console.log(userRole);
                // Implementing Role Based Access
                if (userRole === 'NORMAL' && req.path === '/normal') {
                    next();
                } 
                else if (userRole === 'ADMIN' && req.path === '/admin') {
                    next();
                }
                else{
                    res.status(403).json({
                        Error: 'Forbidden : Insufficient Permissions & Invalid Role !!!'
                    });
                }
            })
            .catch((error) => {
                res.status(401).json({
                    Error: 'Unauthorized : Invalid Token !!!'
                });
                console.log(error);
            })
    }
    else{
        return res.status(401).json({
            Error: 'Unauthorized : Missing or Invalid Token !!!'
        });
    }
}