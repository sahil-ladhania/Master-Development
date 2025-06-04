import { client } from "./client.js";

async function init() {
    await client.lpush("players" , "sahil");
    await client.lpush("players" , "janvi");
    await client.lpush("players" , "asha");
    await client.lpush("players" , "binod");
    await client.lpush("players" , "harshit");

    const result = await client.lpop("players");
    console.log("Result -> " , result);
}

init();