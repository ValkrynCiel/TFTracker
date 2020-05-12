const API = require('./API');
const Match = require('./Match');

class Summoner {
  constructor() {};

  async fetch({ name, puuid }) {
    // let data = name ? 
    //   await API.fetchSummonerByName(name) :
    //   await API.fetchSummonerByPUUID(puuid)

    // this.puuid = data.puuid;
    // this.name = data.name;
    // this.profileIconId = data.profileIconId;
    return this;
  }

  typeOf(cls) {
    console.log('in Summoner - cls', typeof cls)
    console.log('in Summoner - Summoner',typeof Summoner)
    console.log('in Summoner - equality', cls === Summoner)
  }

  // async fetchMatchIds() {
  //   try {
  //     this.matchIds = await API.fetchMatchIds(this.puuid);
  //   } catch (e) {
  //     throw new ExpressError('oh no', 400)
  //   }
  // }

  // async fetchMatchHistoryInfo() {
  //   await this.fetchMatchIds();
  //   // will use slice later for pagination
  //   let ids = [ ...this.matchIds ];
  //   let promises = ids.map(id => new Match().fetch(id));
  //   let matches = await Promise.all(promises);
  //   this.matchHistory = matches.map(m => {
  //     return (
  //       {
  //         matchId: m.id,
  //         match: m.summonerInfo.find(p => p.puuid === this.puuid)
  //       }
  //     );   
  //   })    
  // }
}

module.exports = Summoner;