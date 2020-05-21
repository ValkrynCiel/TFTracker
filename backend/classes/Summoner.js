const API = require('./API');
const Match = require('./Match');
const ExpressError = require('../expressError')

class Summoner {
  constructor({ puuid, name, profileIconId, id, summonerLevel }) {
    this.puuid = puuid;
    this.profile = {
      name,
      profileIconId,
      summonerLevel
    }
    this.ranked = {
      id
    }
  };

  static async fetch(name) {
    try {
      let profileData = await API.fetchSummonerByName(name);
      const summoner = new Summoner(profileData);
      return summoner;
    } catch (e) {
      throw new ExpressError(e.message, 404);
    }
  }

  async fetchRankedData() {
    let {
      tier,
      rank,
      leaguePoints,
      wins,
      losses
    } = await API.fetchRankedData(this.ranked.id);

    this.ranked = {
      ...this.ranked,
      tier,
      rank,
      leaguePoints,
      wins,
      losses
    }
  }

  async fetchMatchHistoryInfo() {
    this.matchIds = await API.fetchMatchIds(this.puuid);
    // will use slice later for pagination
    let ids = [ ...this.matchIds ];
    let promises = ids.map(id => Match.fetch(id));
    let matches = await Promise.all(promises);
    this.matchHistory = matches.map(({
      id, 
      details: { datetime, duration, galaxy, participants}
    }) => {
      return (
        {  
          id,
          details: {
            datetime, 
            duration,
            galaxy,
            participants: [participants.find(p => p.puuid === this.puuid)]
          }
        }
      );   
    })    
  }
}

module.exports = Summoner;