import jwt from 'jsonwebtoken';

export const verifyToken = (token , SECRET_KEY) => {
    return new Promise((resolve , reject) => {
        jwt.verify(token , SECRET_KEY , (error , decodedData) => {
            if(error){
                reject(error);
            }
            else{
                resolve(decodedData);
            }
        })
    })
}