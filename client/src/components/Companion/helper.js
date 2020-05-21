const JSON_URL = 'http://raw.communitydragon.org/pbe/game/data/characters';
const IMG_BASE_URL = 'http://raw.communitydragon.org/latest/game'

/** fetch JSON from url and convert into array
 */
async function fetchSkinData(species, skinId) {
  try {
    let resp = await (await fetch(`${JSON_URL}/${species.toLowerCase()}/skins/skin${skinId}.bin.json`)).json();

    return resp;
  } catch(err) {
    console.log(err)
  }
  
}

/** manipulate string for image source to be found in community dragon */
function getImgSrc (str) {
  let formattedStr = str.replace('.dds', '.png').toLowerCase();

  return `${IMG_BASE_URL}/${formattedStr}`;
}


/** accepts data from Riot Games API and returns an array of image srcs */
export async function getCompanionPortraitSrc(species, skinId) {

  let data = await fetchSkinData(species, skinId);
  let { iconCircle: portraitSrc } = data[Object.keys(data)[0]];

  return getImgSrc(portraitSrc);
}