import React, {Component} from 'react';
import ChampionImage from './ChampionThumbnail';
import { getCompanionPortraitSrcs } from './helper';
import MatchHistoryPage from './MatchHistoryPage';
import './App.css';

// GET /tft/summoner/v1/summoners/by-name/{summonerName}
const Summoner = {
  "id": "H8BXrqn9K-8wVgWABpdE3bHIEUMp4LjnEnlENVG-DjYf25o",
  "accountId": "Vlywm7DXrrrjlb4f85QtFMmen4UKNCwgcSIUAh_jELBRjcE",
  "puuid": "zimTooGz8LCa7S7JZLHhcLqUDEtKlyJ2-TfNZOp0BQSsH6tTt6sEnoXQXhVy1RilJuKbEg6CDVp4tw",
  "name": "VaIkryn",
  "profileIconId": 4507,
  "revisionDate": 1587703556000,
  "summonerLevel": 88
};

//GET /tft/match/v1/matches/by-puuid/{puuid}/ids

const data = [
  "NA1_3389939687",
  "NA1_3389682686",
  "NA1_3389470551",
  "NA1_3389396081",
  "NA1_3389371548",
  "NA1_3388578662",
  "NA1_3388094805",
  "NA1_3388023710",
  "NA1_3387892275",
  "NA1_3386997793",
  "NA1_3386869577",
  "NA1_3382329422",
  "NA1_3382266261",
  "NA1_3382207649",
  "NA1_3382141501",
  "NA1_3382080391",
  "NA1_3382045844",
  "NA1_3381321084",
  "NA1_3381195039",
  "NA1_3379957615"
];

const gameData = {
  "metadata": {
      "data_version": "4",
      "match_id": "NA1_3389939687",
      "participants": [
          "tVmQvZhJGci4zuXIzWHHNnr1ICJDRIib0kfRmuumaqFdZy7ZSraFFPacPStW1crm8MxpsJ5cGWx26w",
          "zimTooGz8LCa7S7JZLHhcLqUDEtKlyJ2-TfNZOp0BQSsH6tTt6sEnoXQXhVy1RilJuKbEg6CDVp4tw",
          "PWVQLZT3hkTyNDQa-sncyzW0q8rg3XapjPuQEOQ_-ECWGSRbtBIydC5jFNoVEUa1XpQeiu0-sGaAYA",
          "6RwKLyQjAMxa05GRi5MVsN918fR6mGyAU9l72EAJNHuHpYXi4LyLsHNMoKB4O2yjTRtxmYx210GiUg",
          "n6F7bTuEt0beZVNm1URjOW64DSUjskP1AAnADC5HeIdh5WOPOIKKaLplOD9smyo3MwltLKTedqsTSg",
          "UfQik0lF8VdP27RWFwpIWohrLK3_VAjRdfTIVCbWVQgVShAHmZwv9Fc0YeVJSN4sa9XygPK9AKKTJA",
          "Lr_EKs4j-XOV0OYY8rAzOKLSJTE-S6L-ExywiVtoYbaiRC7yGG3Fyr55dcX2dkYLQ04gnTTfqOMfaA",
          "wgqv4RG8NLKWalG9szAe5zqL8EPIVvBlZPqlk0CocFMxFkI_171xUdR5dprkK1EljTOO4bQfZvkM9w"
      ]
  },
  "info": {
      "game_datetime": 1587703550946,
      "game_length": 2214.105224609375,
      "game_variation": "TFT3_GameVariation_None",
      "game_version": "Version 10.8.317.8137 (Apr 17 2020/16:09:11) [PUBLIC] <Releases/10.8>",
      "participants": [
          {
              "companion": {
                  "content_ID": "8c27f67c-90b3-4355-9e90-6e92325c6015",
                  "skin_ID": 18,
                  "species": "PetSpiritFox"
              },
              "gold_left": 4,
              "last_round": 40,
              "level": 9,
              "placement": 2,
              "players_eliminated": 1,
              "puuid": "tVmQvZhJGci4zuXIzWHHNnr1ICJDRIib0kfRmuumaqFdZy7ZSraFFPacPStW1crm8MxpsJ5cGWx26w",
              "time_eliminated": 2205.861083984375,
              "total_damage_to_players": 139,
              "traits": [
                  {
                      "name": "Blaster",
                      "num_units": 2,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 2
                  },
                  {
                      "name": "Chrono",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 3
                  },
                  {
                      "name": "Cybernetic",
                      "num_units": 6,
                      "style": 3,
                      "tier_current": 2,
                      "tier_total": 2
                  },
                  {
                      "name": "Infiltrator",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 3
                  },
                  {
                      "name": "ManaReaver",
                      "num_units": 2,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  },
                  {
                      "name": "Mercenary",
                      "num_units": 1,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  },
                  {
                      "name": "Set3_Blademaster",
                      "num_units": 3,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Brawler",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 2
                  },
                  {
                      "name": "Valkyrie",
                      "num_units": 2,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  },
                  {
                      "name": "Vanguard",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 2
                  }
              ],
              "units": [
                  {
                      "character_id": "TFT3_Fiora",
                      "items": [],
                      "name": "",
                      "rarity": 0,
                      "tier": 1
                  },
                  {
                      "character_id": "TFT3_Leona",
                      "items": [
                          7
                      ],
                      "name": "",
                      "rarity": 0,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Lucian",
                      "items": [
                          23,
                          57
                      ],
                      "name": "",
                      "rarity": 1,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Vi",
                      "items": [
                          77,
                          55
                      ],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Irelia",
                      "items": [
                          2,
                          44
                      ],
                      "name": "",
                      "rarity": 3,
                      "tier": 3
                  },
                  {
                      "character_id": "TFT3_Kayle",
                      "items": [],
                      "name": "",
                      "rarity": 3,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_MissFortune",
                      "items": [],
                      "name": "",
                      "rarity": 4,
                      "tier": 1
                  },
                  {
                      "character_id": "TFT3_Thresh",
                      "items": [],
                      "name": "",
                      "rarity": 4,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Ekko",
                      "items": [
                          15,
                          37,
                          13
                      ],
                      "name": "",
                      "rarity": 4,
                      "tier": 2
                  }
              ]
          },
          {
              "companion": {
                  "content_ID": "8c27f67c-90b3-4355-9e90-6e92325c6053",
                  "skin_ID": 12,
                  "species": "PetSpiritFox"
              },
              "gold_left": 2,
              "last_round": 40,
              "level": 9,
              "placement": 1,
              "players_eliminated": 3,
              "puuid": "zimTooGz8LCa7S7JZLHhcLqUDEtKlyJ2-TfNZOp0BQSsH6tTt6sEnoXQXhVy1RilJuKbEg6CDVp4tw",
              "time_eliminated": 2205.861083984375,
              "total_damage_to_players": 143,
              "traits": [
                  {
                      "name": "Blaster",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 2
                  },
                  {
                      "name": "Chrono",
                      "num_units": 4,
                      "style": 2,
                      "tier_current": 2,
                      "tier_total": 3
                  },
                  {
                      "name": "ManaReaver",
                      "num_units": 2,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  },
                  {
                      "name": "Mercenary",
                      "num_units": 1,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  },
                  {
                      "name": "Set3_Blademaster",
                      "num_units": 4,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Brawler",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 2
                  },
                  {
                      "name": "Set3_Celestial",
                      "num_units": 2,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Mystic",
                      "num_units": 0,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 2
                  },
                  {
                      "name": "Valkyrie",
                      "num_units": 2,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  },
                  {
                      "name": "Vanguard",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 2
                  }
              ],
              "units": [
                  {
                      "character_id": "TFT3_Xayah",
                      "items": [],
                      "name": "",
                      "rarity": 0,
                      "tier": 1
                  },
                  {
                      "character_id": "TFT3_Blitzcrank",
                      "items": [
                          3
                      ],
                      "name": "",
                      "rarity": 1,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Blitzcrank",
                      "items": [],
                      "name": "",
                      "rarity": 1,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Shen",
                      "items": [
                          47
                      ],
                      "name": "",
                      "rarity": 1,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Kassadin",
                      "items": [
                          18,
                          45
                      ],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Kayle",
                      "items": [
                          69,
                          23,
                          33
                      ],
                      "name": "",
                      "rarity": 3,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_WuKong",
                      "items": [
                          59
                      ],
                      "name": "",
                      "rarity": 3,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_MissFortune",
                      "items": [],
                      "name": "",
                      "rarity": 4,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Thresh",
                      "items": [
                          24,
                          16
                      ],
                      "name": "",
                      "rarity": 4,
                      "tier": 2
                  }
              ]
          },
          {
              "companion": {
                  "content_ID": "b500e7da-20b4-43e4-a6bf-679d0c947235",
                  "skin_ID": 13,
                  "species": "PetAkaliDragon"
              },
              "gold_left": 0,
              "last_round": 34,
              "level": 8,
              "placement": 4,
              "players_eliminated": 1,
              "puuid": "PWVQLZT3hkTyNDQa-sncyzW0q8rg3XapjPuQEOQ_-ECWGSRbtBIydC5jFNoVEUa1XpQeiu0-sGaAYA",
              "time_eliminated": 1907.2437744140625,
              "total_damage_to_players": 83,
              "traits": [
                  {
                      "name": "DarkStar",
                      "num_units": 6,
                      "style": 3,
                      "tier_current": 2,
                      "tier_total": 3
                  },
                  {
                      "name": "Infiltrator",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 3
                  },
                  {
                      "name": "Protector",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Celestial",
                      "num_units": 2,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Mystic",
                      "num_units": 2,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 2
                  },
                  {
                      "name": "Set3_Sorcerer",
                      "num_units": 2,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 4
                  },
                  {
                      "name": "Sniper",
                      "num_units": 2,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  }
              ],
              "units": [
                  {
                      "character_id": "TFT3_JarvanIV",
                      "items": [],
                      "name": "",
                      "rarity": 0,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Shaco",
                      "items": [
                          15,
                          16,
                          22
                      ],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Karma",
                      "items": [],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Ashe",
                      "items": [],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Lux",
                      "items": [],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Jhin",
                      "items": [
                          17
                      ],
                      "name": "",
                      "rarity": 3,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Xerath",
                      "items": [
                          79,
                          44,
                          34
                      ],
                      "name": "",
                      "rarity": 4,
                      "tier": 1
                  },
                  {
                      "character_id": "TFT3_Lulu",
                      "items": [
                          14
                      ],
                      "name": "",
                      "rarity": 4,
                      "tier": 2
                  }
              ]
          },
          {
              "companion": {
                  "content_ID": "2a705022-688c-4405-bee4-3598b6441fc7",
                  "skin_ID": 1,
                  "species": "PetSpiritFox"
              },
              "gold_left": 1,
              "last_round": 31,
              "level": 8,
              "placement": 7,
              "players_eliminated": 0,
              "puuid": "6RwKLyQjAMxa05GRi5MVsN918fR6mGyAU9l72EAJNHuHpYXi4LyLsHNMoKB4O2yjTRtxmYx210GiUg",
              "time_eliminated": 1745.1119384765625,
              "total_damage_to_players": 54,
              "traits": [
                  {
                      "name": "Demolitionist",
                      "num_units": 2,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  },
                  {
                      "name": "Infiltrator",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 3
                  },
                  {
                      "name": "MechPilot",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 1
                  },
                  {
                      "name": "Rebel",
                      "num_units": 3,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Blademaster",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Brawler",
                      "num_units": 2,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 2
                  },
                  {
                      "name": "Set3_Sorcerer",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 4
                  },
                  {
                      "name": "Set3_Void",
                      "num_units": 3,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  },
                  {
                      "name": "Starship",
                      "num_units": 1,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  },
                  {
                      "name": "TemplateTrait",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0
                  }
              ],
              "units": [
                  {
                      "character_id": "TFT3_Malphite",
                      "items": [],
                      "name": "",
                      "rarity": 0,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_KhaZix",
                      "items": [],
                      "name": "Khazix",
                      "rarity": 0,
                      "tier": 1
                  },
                  {
                      "character_id": "TFT3_MasterYi",
                      "items": [],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Rumble",
                      "items": [],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_ChoGath",
                      "items": [
                          27,
                          67,
                          5
                      ],
                      "name": "Chogath",
                      "rarity": 3,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_VelKoz",
                      "items": [],
                      "name": "",
                      "rarity": 3,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_AurelionSol",
                      "items": [
                          38,
                          44,
                          44
                      ],
                      "name": "",
                      "rarity": 4,
                      "tier": 1
                  },
                  {
                      "character_id": "TFT3_AurelionSol",
                      "items": [
                          46
                      ],
                      "name": "",
                      "rarity": 4,
                      "tier": 1
                  }
              ]
          },
          {
              "companion": {
                  "content_ID": "5897ad9f-4665-4372-8f3e-6c878adb8918",
                  "skin_ID": 1,
                  "species": "PetTFTAvatar"
              },
              "gold_left": 3,
              "last_round": 33,
              "level": 9,
              "placement": 6,
              "players_eliminated": 0,
              "puuid": "n6F7bTuEt0beZVNm1URjOW64DSUjskP1AAnADC5HeIdh5WOPOIKKaLplOD9smyo3MwltLKTedqsTSg",
              "time_eliminated": 1844.6260986328125,
              "total_damage_to_players": 87,
              "traits": [
                  {
                      "name": "Blaster",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 2
                  },
                  {
                      "name": "Chrono",
                      "num_units": 4,
                      "style": 2,
                      "tier_current": 2,
                      "tier_total": 3
                  },
                  {
                      "name": "DarkStar",
                      "num_units": 3,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "ManaReaver",
                      "num_units": 2,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  },
                  {
                      "name": "Set3_Blademaster",
                      "num_units": 3,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Celestial",
                      "num_units": 2,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Sorcerer",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 4
                  },
                  {
                      "name": "Valkyrie",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 1
                  },
                  {
                      "name": "Vanguard",
                      "num_units": 2,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 2
                  }
              ],
              "units": [
                  {
                      "character_id": "TFT3_Xayah",
                      "items": [],
                      "name": "",
                      "rarity": 0,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Shen",
                      "items": [],
                      "name": "",
                      "rarity": 1,
                      "tier": 1
                  },
                  {
                      "character_id": "TFT3_Mordekaiser",
                      "items": [],
                      "name": "",
                      "rarity": 1,
                      "tier": 1
                  },
                  {
                      "character_id": "TFT3_Ezreal",
                      "items": [],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Kassadin",
                      "items": [],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Kayle",
                      "items": [
                          69,
                          23,
                          79
                      ],
                      "name": "",
                      "rarity": 3,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_WuKong",
                      "items": [
                          36,
                          45,
                          77
                      ],
                      "name": "",
                      "rarity": 3,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Xerath",
                      "items": [],
                      "name": "",
                      "rarity": 4,
                      "tier": 1
                  },
                  {
                      "character_id": "TFT3_Thresh",
                      "items": [
                          7,
                          89
                      ],
                      "name": "",
                      "rarity": 4,
                      "tier": 1
                  }
              ]
          },
          {
              "companion": {
                  "content_ID": "06a889dd-31b6-4c55-897a-411c6a1dda53",
                  "skin_ID": 2,
                  "species": "PetDSSwordGuy"
              },
              "gold_left": 1,
              "last_round": 38,
              "level": 9,
              "placement": 3,
              "players_eliminated": 2,
              "puuid": "UfQik0lF8VdP27RWFwpIWohrLK3_VAjRdfTIVCbWVQgVShAHmZwv9Fc0YeVJSN4sa9XygPK9AKKTJA",
              "time_eliminated": 2109.878662109375,
              "total_damage_to_players": 196,
              "traits": [
                  {
                      "name": "Blaster",
                      "num_units": 4,
                      "style": 3,
                      "tier_current": 2,
                      "tier_total": 2
                  },
                  {
                      "name": "Chrono",
                      "num_units": 2,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "Cybernetic",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 2
                  },
                  {
                      "name": "Mercenary",
                      "num_units": 1,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  },
                  {
                      "name": "Rebel",
                      "num_units": 3,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Brawler",
                      "num_units": 4,
                      "style": 3,
                      "tier_current": 2,
                      "tier_total": 2
                  },
                  {
                      "name": "Set3_Void",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 1
                  },
                  {
                      "name": "SpacePirate",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 2
                  },
                  {
                      "name": "Starship",
                      "num_units": 1,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  },
                  {
                      "name": "Valkyrie",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 1
                  }
              ],
              "units": [
                  {
                      "character_id": "TFT3_Malphite",
                      "items": [],
                      "name": "",
                      "rarity": 0,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Graves",
                      "items": [],
                      "name": "",
                      "rarity": 0,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Blitzcrank",
                      "items": [],
                      "name": "",
                      "rarity": 1,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Ezreal",
                      "items": [],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Vi",
                      "items": [
                          67,
                          66,
                          47
                      ],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Jinx",
                      "items": [
                          69,
                          12,
                          57
                      ],
                      "name": "",
                      "rarity": 3,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_ChoGath",
                      "items": [
                          47
                      ],
                      "name": "Chogath",
                      "rarity": 3,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_MissFortune",
                      "items": [
                          44,
                          47
                      ],
                      "name": "",
                      "rarity": 4,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_AurelionSol",
                      "items": [],
                      "name": "",
                      "rarity": 4,
                      "tier": 1
                  }
              ]
          },
          {
              "companion": {
                  "content_ID": "6166ada4-50c8-4b63-90ad-847f6f24cc08",
                  "skin_ID": 7,
                  "species": "PetPenguKnight"
              },
              "gold_left": 0,
              "last_round": 33,
              "level": 8,
              "placement": 5,
              "players_eliminated": 0,
              "puuid": "Lr_EKs4j-XOV0OYY8rAzOKLSJTE-S6L-ExywiVtoYbaiRC7yGG3Fyr55dcX2dkYLQ04gnTTfqOMfaA",
              "time_eliminated": 1850.0751953125,
              "total_damage_to_players": 81,
              "traits": [
                  {
                      "name": "Chrono",
                      "num_units": 2,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "Cybernetic",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 2
                  },
                  {
                      "name": "DarkStar",
                      "num_units": 2,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 3
                  },
                  {
                      "name": "Rebel",
                      "num_units": 3,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Blademaster",
                      "num_units": 3,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Brawler",
                      "num_units": 2,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 2
                  },
                  {
                      "name": "Set3_Mystic",
                      "num_units": 2,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 2
                  },
                  {
                      "name": "Set3_Sorcerer",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 4
                  },
                  {
                      "name": "TemplateTrait",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0
                  }
              ],
              "units": [
                  {
                      "character_id": "TFT3_Yasuo",
                      "items": [
                          77,
                          2
                      ],
                      "name": "",
                      "rarity": 1,
                      "tier": 3
                  },
                  {
                      "character_id": "TFT3_Blitzcrank",
                      "items": [
                          67
                      ],
                      "name": "",
                      "rarity": 1,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Shen",
                      "items": [],
                      "name": "",
                      "rarity": 1,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Sona",
                      "items": [
                          27
                      ],
                      "name": "",
                      "rarity": 1,
                      "tier": 3
                  },
                  {
                      "character_id": "TFT3_MasterYi",
                      "items": [
                          55,
                          69,
                          23
                      ],
                      "name": "",
                      "rarity": 2,
                      "tier": 3
                  },
                  {
                      "character_id": "TFT3_Vi",
                      "items": [
                          59
                      ],
                      "name": "",
                      "rarity": 2,
                      "tier": 1
                  },
                  {
                      "character_id": "TFT3_Karma",
                      "items": [],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Lux",
                      "items": [],
                      "name": "",
                      "rarity": 2,
                      "tier": 1
                  }
              ]
          },
          {
              "companion": {
                  "content_ID": "5897ad9f-4665-4372-8f3e-6c878adb8918",
                  "skin_ID": 1,
                  "species": "PetTFTAvatar"
              },
              "gold_left": 0,
              "last_round": 30,
              "level": 8,
              "placement": 8,
              "players_eliminated": 0,
              "puuid": "wgqv4RG8NLKWalG9szAe5zqL8EPIVvBlZPqlk0CocFMxFkI_171xUdR5dprkK1EljTOO4bQfZvkM9w",
              "time_eliminated": 1679.225830078125,
              "total_damage_to_players": 57,
              "traits": [
                  {
                      "name": "DarkStar",
                      "num_units": 6,
                      "style": 3,
                      "tier_current": 2,
                      "tier_total": 3
                  },
                  {
                      "name": "Infiltrator",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 3
                  },
                  {
                      "name": "ManaReaver",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 1
                  },
                  {
                      "name": "Protector",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Celestial",
                      "num_units": 2,
                      "style": 1,
                      "tier_current": 1,
                      "tier_total": 3
                  },
                  {
                      "name": "Set3_Mystic",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 2
                  },
                  {
                      "name": "Set3_Sorcerer",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 4
                  },
                  {
                      "name": "Sniper",
                      "num_units": 2,
                      "style": 3,
                      "tier_current": 1,
                      "tier_total": 1
                  },
                  {
                      "name": "TemplateTrait",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0
                  },
                  {
                      "name": "Vanguard",
                      "num_units": 1,
                      "style": 0,
                      "tier_current": 0,
                      "tier_total": 2
                  }
              ],
              "units": [
                  {
                      "character_id": "TFT3_JarvanIV",
                      "items": [],
                      "name": "",
                      "rarity": 0,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Mordekaiser",
                      "items": [
                          69
                      ],
                      "name": "",
                      "rarity": 1,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Shaco",
                      "items": [
                          55,
                          16,
                          16
                      ],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Kassadin",
                      "items": [],
                      "name": "",
                      "rarity": 2,
                      "tier": 1
                  },
                  {
                      "character_id": "TFT3_Karma",
                      "items": [],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Ashe",
                      "items": [],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Lux",
                      "items": [
                          4
                      ],
                      "name": "",
                      "rarity": 2,
                      "tier": 2
                  },
                  {
                      "character_id": "TFT3_Jhin",
                      "items": [
                          26,
                          27,
                          79
                      ],
                      "name": "",
                      "rarity": 3,
                      "tier": 2
                  }
              ]
          }
      ],
      "queue_id": 1100,
      "tft_set_number": 3
  }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: []
        };
    }
    async componentDidMount() {
        this.setState({urls:  await getCompanionPortraitSrcs(gameData.info.participants)});
    }
  render() {
    return (
        <div className="App">
        <ChampionImage champion='ahri' stars={2}/>
        <ChampionImage champion='xerath' stars={3}/>
        <ChampionImage champion='shaco' stars={1}/>
        {this.state.urls.map(url => <img src = {url} />)}
        <MatchHistoryPage />
        </div>
    );
  }
}

export default App;
