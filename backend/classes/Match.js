const API = require('./API');
const Summoner = require('./Summoner');

class Match {
  constructor() {};

  async fetch(puuid) {
    // let data = await API.fetchMatchById(puuid);
    // let { match_id, participants: summonerIds } = data.metadata;
    // let { game_variation: galaxy, participants: summonerInfo } = data.info;
    // this.id = match_id;
    // this.summonerIds = summonerIds;
    // this.galaxy = galaxy;
    // this.summonerInfo = summonerInfo;
    return this;
  }

  typeOf(cls) {
    console.log('in Match - cls', typeof cls)
    console.log('in Match - Summoner', typeof Summoner)
    console.log('in Match - equality', cls === Summoner)
  }

  // async fetchSummonerDetails() {
  //   let promises = this.summonerIds.map(puuid => new Summoner().fetch({ puuid }));
  //   let summoners = await Promise.all(promises);
  //   summoners.forEach((s, i) => {
  //     this.summonerInfo[i].summoner = s
  //   });
  // }
}

module.exports = Match;