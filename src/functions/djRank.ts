export const djRank = (showBody: boolean, isBody: boolean, notes: number, exscore: number): string => {
  const max = notes * 2;
  const percentage: number = exscore / max;

  if (percentage < 2 / 9) {
    if (showBody) return !isBody ? "F+" : `${Math.ceil(exscore - (max * 1) / 9)}`;
    return !isBody ? "E-" : `${Math.ceil((max * 2) / 9) - exscore}`;
  }
  if (percentage >= 2 / 9 && percentage < 1 / 3) {
    if (showBody) return !isBody ? "E+" : `${Math.ceil(exscore - (max * 2) / 9)}`;
    return !isBody ? "D-" : `${Math.ceil((max * 1) / 3) - exscore}`;
  }
  if (percentage >= 1 / 3 && percentage < 4 / 9) {
    if (showBody) return !isBody ? "D+" : `${Math.ceil(exscore - (max * 1) / 3)}`;
    return !isBody ? "C-" : `${Math.ceil((max * 4) / 9) - exscore}`;
  }
  if (percentage >= 4 / 9 && percentage < 5 / 9) {
    if (showBody) return !isBody ? "C+" : `${Math.ceil(exscore - (max * 4) / 9)}`;
    return !isBody ? "B-" : `${Math.ceil((max * 5) / 9) - exscore}`;
  }
  if (percentage >= 5 / 9 && percentage < 2 / 3) {
    if (showBody) return !isBody ? "B+" : `${Math.ceil(exscore - (max * 5) / 9)}`;
    return !isBody ? "A-" : `${Math.ceil((max * 2) / 3) - exscore}`;
  }
  if (percentage >= 2 / 3 && percentage < 7 / 9) {
    if (showBody) return !isBody ? "A+" : `${Math.ceil(exscore - (max * 2) / 3)}`;
    return !isBody ? "AA-" : `${Math.ceil((max * 7) / 9) - exscore}`;
  }
  if (percentage >= 7 / 9 && percentage < 8 / 9) {
    if (showBody) return !isBody ? "AA+" : `${Math.ceil(exscore - (max * 7) / 9)}`;
    return !isBody ? "AAA-" : `${Math.ceil((max * 8) / 9) - exscore}`;
  }
  if (percentage >= 8 / 9 && percentage < 17 / 18) {
    if (showBody) return !isBody ? "MAX-" : `${max - exscore}`;
    return !isBody ? "AAA+" : `${exscore - Math.ceil((max * 8) / 9)}`;
  }
  if (percentage >= 17 / 18) {
    return `MAX-${max - exscore}`;
  }
  return "";
};
