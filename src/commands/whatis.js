import {wikiEmbedChampionByName} from '../leagueRelated/champLookup';

module.exports = {
    name: 'whatis',
    description: 'command for searching League of Legends champion info against Data Dragon json repository, eg: whatevenis Graves',
    execute: (msg, args) => {
        wikiEmbedChampionByName(msg, args[1]);
    }
}