export const StatsStatNameAbbreviation = (() => {
  const abbreviations = {
    "attack" : 'atk',
    "defense": "def",
    "special-attack": "sp-atk",
    "special-defense": "sp-def",
    "speed": "spd",
    "hp": "hp"
  };

  return (label) => abbreviations[label];
})();