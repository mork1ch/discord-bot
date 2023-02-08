import { Client, ClientOptions } from "discord.js";

const token = require("./config.json");

console.log("Bot is starting...");

const client = new Client({
    intents: []
});
console.log(token);

console.log(client);