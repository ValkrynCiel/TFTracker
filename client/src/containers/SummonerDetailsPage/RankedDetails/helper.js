export function formatTier(t) {
  let tier = t[0].toUpperCase() + t.slice(1);
  return tier;
};

export function formatEndpoint(tier, rank) {

  let ref = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4
  }

  return `${tier}_${ref[rank]}.png`;
};
