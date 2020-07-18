import 'dotenv/config';
import axios from 'axios';
import { setUpClientCommands } from './setUpClientCommands';
import { wikiEmbedChampionByName } from './leagueRelated/champLookup';
import { Channel } from 'discord.js';
const Discord = require('discord.js');


const client = new Discord.Client();
setUpClientCommands(client);

const prefix = '!'

client.once('ready', () => {
    console.log('LoLCommandBot online');
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args[0].toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(msg, args)
    } catch (e) {
        console.log("ERROR EXECUTING COMMAND");
        console.log(e);
    };

    // if(command === 'whatis'){
    //     wikiEmbedChampionByName(msg, args[1]);
    // } else if (command === 'play'){

});

client.login(process.env.DISCORD_BOT_TOKEN);