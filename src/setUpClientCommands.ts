import * as Discord from 'discord.js';
import * as fs from 'fs';


export const setUpClientCommands = (client) => {
    client.commands = new Discord.Collection();
    const commandFiles = fs.readdirSync('build/commands').filter(file => file.endsWith('.js'));
    
    commandFiles.map(file => {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
    });
    console.log(JSON.stringify(client.commands));
};