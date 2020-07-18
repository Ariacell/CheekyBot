import * as Discord from 'discord.js';
import ytdl from 'discord-ytdl-core';

export const playSFX = (msg: any, args: string[]) => {
    // console.log(msg.member);
    const voxChannel: Discord.VoiceChannel = msg.member.voice.channel;
    voxChannel.join().then(connection => {

        const stream = ytdl(args[1],
            {
                filter: 'audioonly',
                opusEncoded: true,
                encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200']
            });

        console.log(JSON.stringify(stream));

        const dispatcher = connection.play(stream, {type: "opus"})
        .setVolume(0.25);
        connection.on("error", info => {
            console.log(info);
        })
        .on("finish", end => {
            voxChannel.leave();
        })
    }).catch(err => {
        console.log("Error joining voice channel: " + err);
    })
}

export default playSFX;