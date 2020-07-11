import axios from 'axios';
import Discord from 'discord.js';

const ddragonUrl = 'http://ddragon.leagueoflegends.com/cdn';
const patch = '10.14.1'
const basePath = ddragonUrl+'/'+patch;

export const wikiEmbedChampionByName = (msg, name) => {

    axios.get(basePath + '/data/en_US/champion/' + name + '.json')
        .catch(e => {
            console.log('ERROR FETCHING! Error follows: ' + e);
        })
        .then(res => {
            console.log('We successfully got data');
            msg.channel.send(buildEmbedMsgFromChampJSON(res.data));
        })
}

const buildEmbedMsgFromChampJSON = (champResponse) => {
    
    const jsonParsedChampResp = JSON.parse(JSON.stringify(champResponse));
    const champData = Object.values(jsonParsedChampResp.data)[0];

    const champName = champData.id;
    const abilityKeys = ['Q','W','E','R'];

    const embedMain = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setThumbnail(ddragonUrl + '/img/champion/loading/' + champName + '_0.jpg')
    .setAuthor(champData.id + ', ' + champData.title, basePath + '/img/champion/' + champName + '.png')
    .addField(champData.passive.name, champData.passive.description)
    .setImage(ddragonUrl + '/img/champion/splash/' + champName + '_0.jpg');

    champData.spells.forEach((spell,i) => {
        embedMain.addField(abilityKeys[i],'-', true);        
        embedMain.addField(spell.name, spell.description.replace(/( |<([^>]+)>)/ig, ' '), true);
        embedMain.addField("Cooldown", spell.cooldownBurn, true);

    });
    
    return embedMain;

}

export default wikiEmbedChampionByName;