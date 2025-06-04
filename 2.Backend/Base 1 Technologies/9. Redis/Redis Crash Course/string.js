import { client } from "./client.js";

async function init() {
    await client.expire("message:1" , 10);
    const result = await client.get("message:1");
    console.log("Result -> " , result);
}

init();