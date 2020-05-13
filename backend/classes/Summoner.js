const API = require('./API');
const Match = require('./Match');

class Summoner {
  constructor({ puuid, name, profileIconId }) {
    this.puuid = puuid,
    this.name = name,
    this.profileIconId = profileIconId
  };

  static async fetch(name) {
    try {
      let data = await API.fetchSummonerByName(name);

      const summoner = new Summoner(data);
  
      return summoner;
    } catch (e) {
      throw new ExpressError('Not found', 404);
    }
  }

  static typeOf(cls) {
    console.log('in Summoner - cls', typeof cls)
    console.log('in Summoner - Summoner',typeof Summoner)
    console.log('in Summoner - equality', cls === Summoner)
    console.log('Match is a class in Summoner?', typeof Match)
  }

  async fetchMatchIds() {
    try {
      this.matchIds = await API.fetchMatchIds(this.puuid);
    } catch (e) {
      throw new ExpressError('Something went wrong', 400)
    }
  }

  async fetchMatchHistoryInfo() {
    await this.fetchMatchIds();
    // will use slice later for pagination
    let ids = [ ...this.matchIds ];
    let promises = ids.map(id => Match.fetch(id));
    let matches = await Promise.all(promises);
    this.matchHistory = matches.map(m => {
      return (
        {
          matchId: m.id,
          match: m.outcome.find(p => p.puuid === this.puuid)
        }
      );   
    })    
  }
}

module.exports = Summoner;