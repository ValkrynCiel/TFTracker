export function formatRank(tier, rank) {
  let formatted = tier[0].toUpperCase() + tier.slice(1);
  return formatted === 'Unranked' ? formatted : `${formatted} ${rank}`;
};

export function formatEndpoint(tier, rank) {

  let ref = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4
  }
  
  if (!rank) return 'unranked.png'
  return `${tier}_${ref[rank]}.png`;
};
