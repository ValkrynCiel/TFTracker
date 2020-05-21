const API = require('./API');

class Match {
  constructor({ 
    id, 
    summonerIds, 
    galaxy, 
    participants, 
    datetime, 
    duration 
  }) {
    this.id = id,
    this.summonerIds = summonerIds,
    this.details = {
      galaxy,
      datetime,
      duration,
      participants
    }
  };

  static async fetch(mId) {
    let {
      metadata: 
      {
        match_id: id, 
        participants: summonerIds
      },
      info: 
      {
        game_variation: galaxy, 
        participants: participants, 
        game_datetime: datetime, 
        game_length: duration
      }
    } = await API.fetchMatchById(mId);

    let match = new Match({ id, participants, summonerIds, galaxy, datetime, duration });

    return match;
  }

  _sortParticipantDetails() {
    let { participants } = this.details;
    //sort by placement of each summoner ascending
    participants.sort((a,b) => a.placement - b.placement);

    //sort unites and traits descending
    participants.forEach((d, i) => {
      this.summonerIds[i] = d.puuid;

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


  async fetchParticipantDetails() {
    let promises = this.summonerIds.map(puuid => API.fetchSummonerByPUUID(puuid));
    let participants = await Promise.all(promises);
    participants.forEach(({ name, profileIconId }, i) => {
      let p = this.details.participants[i];
      p.name = name;
      p.profileIconId = profileIconId;
    });
    this._sortParticipantDetails();
  }
}

module.exports = Match;