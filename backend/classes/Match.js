const API = require('./API');
const Summoner = require('./Summoner');

class Match {
  constructor({ id, summonerIds, galaxy, outcome }) {
    this.id = id,
    this.summonerIds = summonerIds,
    this.galaxy = galaxy,
    this.outcome = outcome
  };

  static async fetch(puuid) {
    let data = await API.fetchMatchById(puuid);
    let { match_id: id, participants: summonerIds } = data.metadata;
    let { game_variation: galaxy, participants: outcome } = data.info;
    let match = new Match({ id, summonerIds, galaxy, outcome });
    return match;
  }

  static typeOf(cls) {
    console.log('in Match - cls', typeof cls)
    console.log('in Match - Summoner', typeof Summoner)
    console.log('in Match - equality', cls === Summoner)
    console.log(typeof Match, "Match is a class?")
  }

  async fetchSummonerDetails() {
    let promises = this.summonerIds.map(puuid => API.fetchSummonerByPUUID(puuid));
    let summoners = await Promise.all(promises);
    summoners.forEach(({ name, profileIconId }, i) => {
      let info = this.outcome[i];
      info.name = name;
      info.profileIconId = profileIconId;
    });
  }
}

module.exports = Match;