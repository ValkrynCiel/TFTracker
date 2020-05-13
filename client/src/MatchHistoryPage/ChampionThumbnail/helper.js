import ChampionArr from '../../assets/set3/champions.json'

export default function getChampionReference() {
  let reference = {};

  for (let c of ChampionArr) {
    let { championId, ...rest } = c;
    reference[championId] = rest;
  }

  return reference;
}