import * as Discord from 'discord.js';

export const playSFX = (msg: any, args: string[]) => {
    // console.log(msg.member);
    const voxChannel: Discord.VoiceChannel = msg.member.voice.channel;
    voxChannel.join().then(connection => {
        const dispatcher = connection.play(args[1]);
        dispatcher.on("error", info => {
            console.log(info);
        })
        dispatcher.on("finish", end => {
            voxChannel.leave();
        })
    }).catch(err => {
        console.log("Error joining voice channel: " + err);
    })
}

export default playSFX;