const JSON_URL = 'http://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/companions.json';
const IMG_BASE_URL = 'http://raw.communitydragon.org/pbe/game/assets/characters'

/** fetch JSON from url and convert into array
 */
async function fetchCompanionData () {
  try {
    let companionArr = await (await fetch(JSON_URL)).json();
    return companionArr;
  } catch(err) {
    console.log(err)
  }
  
}

/** manipulate string for image source to be found in community dragon */
function getImgSrc (str) {
  let cleanedStr = str.replace('/lol-game-data/assets/ASSETS/Loadouts/Companions/Tooltip_', '')
    .toLowerCase();

  let endPoint = cleanedStr === 'tft_avatar_blue.littlelegends_darkstar.png' 
  ? 'tft_avatar_blue.png' : cleanedStr;
  
  let dir = cleanedStr === 'tft_avatar_blue.littlelegends_darkstar.png'
  ? 'tftavatar' : endPoint.substring(0, endPoint.indexOf('_'));

  return `${IMG_BASE_URL}/pet${dir}/hud/icon_${endPoint}`;
}

function sortParticipantRanking(p) {
  return p.sort((a, b) => a.placement - b.placement);
}

/** accepts data from Riot Games API and returns an array of image srcs */
export async function getCompanionPortraitSrcs(participants) {

  let companionArr = await fetchCompanionData();
  let sorted = sortParticipantRanking(participants);

  return sorted.map(({ companion: { content_ID: searchId }}) => {
    let companion = companionArr.find(({ contentId }) => contentId === searchId);
    return getImgSrc(companion.loadoutsIcon);
  });
}
    

