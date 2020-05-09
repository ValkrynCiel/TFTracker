const axios = require('axios');

const CONFIG = {
  headers: {
    "X-Riot-Token": process.env.APIKEY
  }
}

const BASE_URL = 'https://na1.api.riotgames.com/tft/'


class API {
  
  static async fetchSummonerByName(name) {
    let resp = await axios.get(`${BASE_URL}summoner/v1/summoners/by-name/${name}`, CONFIG);

    return resp.data;
  }

  static async fetchSummonerByPUUID(puuid) {
    let resp = await axios.get(`${BASE_URL}summoner/v1/summoners/by-puuid/${id}`, CONFIG);
    return resp.data;
  }

  static async fetchMatchHistory(puuid) {
    let resp = await axios.get(`${BASE_URL}match/v1/matches/by-puuid/${puuid}/ids`
  }
}

module.exports = API;