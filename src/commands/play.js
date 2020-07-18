import {playSFX} from '../musicAndSFX/playSFX';

module.exports = {
    name: 'play',
    description: 'command for playing sound effects',
    execute: (msg, args) => {
        playSFX(msg, args);
    }
}