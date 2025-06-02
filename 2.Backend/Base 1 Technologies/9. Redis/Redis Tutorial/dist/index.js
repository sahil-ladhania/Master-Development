var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import Redis from 'ioredis';
import axios from 'axios';
import { createServer } from 'http';
import { Server } from 'socket.io';
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
io.on("connection", (socket) => {
    console.log("Socket Connected : ", socket.id);
    socket.on("message", (message) => {
        io.emit("server-message", message);
    });
});
const PORT = 3000;
const redis = new Redis({
    host: 'localhost',
    port: Number(6379)
});
app.use(express.json());
app.use(express.static('./public'));
// Rate Limiter
app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const key = 'rate-limit';
    const value = yield redis.get(key);
    if (value === null) {
        yield redis.set(key, 0);
        yield redis.expire(key, 60);
    }
    if (Number(value) > 10) {
        return res.status(429).json({
            Message: "Too Many Requests ..."
        });
    }
    ;
    redis.incr(key);
    next();
}));
const cacheStore = {
    totalPageCount: 0
};
app.get('/', (req, res) => {
    return res.status(200).json({
        Message: "All is Well..."
    });
});
app.get('/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const URL = "https://api.freeapi.app/api/v1/public/books";
        const response = yield axios.get(URL);
        return res.status(200).json({
            Message: "Successfully Got All Books ...",
            Books: response.data
        });
    }
    catch (error) {
        console.log("Getting Error : ", error);
    }
}));
app.get('/books/total', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        // Check in Cache -----> Using Redis
        const cachedValue = yield redis.get('totalPageCount');
        if (cachedValue) {
            console.log("Cache Hit ...");
            return res.status(200).json({
                Message: "Successfully Got Total Page Count ...",
                TotalPageCount: Number(cachedValue)
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
        const response = yield axios.get(URL);
        const totalPageCount = (_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.reduce((acc, curr) => { var _a, _b; return !((_a = curr.volumeInfo) === null || _a === void 0 ? void 0 : _a.pageCount) ? 0 : ((_b = curr.volumeInfo) === null || _b === void 0 ? void 0 : _b.pageCount) + acc; }, 0);
        // Set the Cache ----> Using Redis
        yield redis.set('totalPageCount', totalPageCount);
        console.log("Cache Miss ...");
        // Set the Cache ----> Using HashMap
        // cacheStore.totalPageCount = Number(totalPageCount);
        // console.log("Cache Miss ...");
        return res.status(200).json({
            Message: "Successfully Got Total Page Count ...",
            TotalPageCount: totalPageCount
        });
    }
    catch (error) {
        console.log("Getting Error : ", error);
    }
}));
httpServer.listen(PORT, () => {
    console.log("Server is Listening on Port : ", PORT);
});
