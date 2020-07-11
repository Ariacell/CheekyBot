import 'dotenv/config';
import axios from 'axios';
import {wikiEmbedChampionByName} from './champLookup';
import { Channel } from 'discord.js';
const Discord = require('discord.js');


const client = new Discord.Client();

const prefix = '!'

client.once('ready', () => {
    console.log('LoLCommandBot online');
});

client.on('message', msg => {
    if(!msg.content.startsWith(prefix)||msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const command = args[0].toLowerCase();

    if(command === 'whatevenis'){
        wikiEmbedChampionByName(msg, args[1]);
    }
})

client.login(process.env.DISCORD_BOT_TOKEN);