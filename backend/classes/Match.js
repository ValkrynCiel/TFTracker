const API = require('./API');

class Match {
  async fetch(puuid) {
    let data = await API.fetchMatchById(puuid);
    let { match_id } = data.metadata;
    let { game_variation: galaxy, participants } = data.info;
    this.id = match_id;
    this.galaxy = galaxy;
    this.participants = participants;
    return this;
  }
}

module.exports = Match;