import express from 'express';
import Redis from 'ioredis';
import axios from 'axios';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection" , (socket) => {
    console.log("Socket Connected : " , socket.id);
    socket.on("message" , (message) => {
        io.emit("server-message" , message);
    })
});

const PORT = 3000;

const redis = new Redis({
    host : 'localhost',
    port : Number(6379)
});

app.use(express.json());
app.use(express.static('./public'));

// Rate Limiter
app.use(async (req , res , next) => {
    const key = 'rate-limit';
    const value = await redis.get(key);

    if(value === null){
        await redis.set(key , 0);
        await redis.expire(key , 60);
    }

    if(Number(value) > 10){
        return res.status(429).json({
            Message : "Too Many Requests ..."
        });
    };

    redis.incr(key);
    next();
})

interface CacheStore{
    totalPageCount : number
}

const cacheStore : CacheStore = {
    totalPageCount : 0
};

app.get('/' , (req , res) => {
    return res.status(200).json({
        Message : "All is Well..."
    });
})

app.get('/books' , async(req , res) => {
    try {
        const URL = "https://api.freeapi.app/api/v1/public/books";
        const response = await axios.get(URL);
        return res.status(200).json({
            Message : "Successfully Got All Books ...",
            Books : response.data
        })
    }
    catch (error) {
        console.log("Getting Error : " , error);
    }
});

app.get('/books/total' , async(req , res) => {
    try {
        // Check in Cache -----> Using Redis
        const cachedValue = await redis.get('totalPageCount');
        if(cachedValue){
            console.log("Cache Hit ...");
            return res.status(200).json({
                Message : "Successfully Got Total Page Count ...",
                TotalPageCount : Number(cachedValue)
            });
        }

        // Check in Cache -----> Using HashMap
        // if(cacheStore.totalPageCount){
        //     console.log("Cache Hit ...");
        //     return res.status(200).json({
        //         Message : "Successfully Got Total Page Count ...",
        //         TotalPageCount : Number(cacheStore.totalPageCount)
        //     });
        // }

        const URL = "https://api.freeapi.app/api/v1/public/books";
        const response = await axios.get(URL);

        const totalPageCount = response?.data?.data?.data?.reduce(
            (acc : number , curr : { volumeInfo?: { pageCount? : number } }) => !curr.volumeInfo?.pageCount ? 0 : curr.volumeInfo?.pageCount + acc , 0
        );

        // Set the Cache ----> Using Redis
        await redis.set('totalPageCount' , totalPageCount);
        console.log("Cache Miss ...");

        // Set the Cache ----> Using HashMap
        // cacheStore.totalPageCount = Number(totalPageCount);
        // console.log("Cache Miss ...");

        return res.status(200).json({
            Message : "Successfully Got Total Page Count ...",
            TotalPageCount : totalPageCount
        });
    }
    catch (error) {
        console.log("Getting Error : " , error);
    }
})

httpServer.listen(PORT , () => {
    console.log("Server is Listening on Port : " , PORT);
});