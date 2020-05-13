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
    match._sortDetails()
    return match;
  }

  _sortDetails() {
    this.outcome.forEach(detail => {
      detail.units.sort((a,b) => {
      if (a.tier < b.tier) return 1;
      if (a.tier > b.tier) return -1;
      if (a.rarity < b.rarity) return 1;
      if (a.rarity > b.rarity) return -1;
      return 0;
      });

      detail.traits.sort((a, b) => {
        if (a.style < b.style) return 1;
        if (a.style > b.style) return -1;
        if (a.num_units < b.num_units) return 1;
        if (a.num_units > b.num_units) return -1;
        return 0;
      })
    });
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