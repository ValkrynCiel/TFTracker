const API = require('./API');
const Summoner = require('./Summoner');

class Match {
  constructor({ 
    id, 
    summonerIds, 
    galaxy, 
    details, 
    datetime, 
    duration 
  }) {
    this.id = id,
    this.summonerIds = summonerIds,
    this.galaxy = galaxy,
    this.details = details,
    this.datetime = datetime,
    this.duration = duration
  };

  static async fetch(puuid) {
    let data = await API.fetchMatchById(puuid);
    let { match_id: id, participants: summonerIds } = data.metadata;
    let { 
      game_variation: galaxy, 
      participants: details, 
      game_datetime: datetime, 
      game_length: duration } = data.info;
    let match = new Match({ id, summonerIds, galaxy, details, datetime, duration });
    match._sortDetails()
    return match;
  }

  _sortDetails() {
    //sort by placement of each summoner ascending
    this.details.sort((a,b) => a.placement - b.placement);

    //sort unites and traits descending
    this.details.forEach(d => {

      d.units.sort((a,b) => {
      if (a.tier < b.tier) return 1;
      if (a.tier > b.tier) return -1;
      if (a.rarity < b.rarity) return 1;
      if (a.rarity > b.rarity) return -1;
      return 0;
      });

      d.traits.sort((a, b) => {
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
      let info = this.details[i];
      info.name = name;
      info.profileIconId = profileIconId;
    });
  }
}

module.exports = Match;