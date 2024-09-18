
process.nextTick(cb);

Promise.resolve(cb);

setTimeout(cb, 0);

setImmediate(cb);

fs.readFile('./eventLoop.js' , cb);

https.get("URL" , cb);