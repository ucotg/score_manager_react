export const djRank = (showBody: boolean, isBody: boolean, notes: number, exscore: number): string => {
  const max = notes * 2;
  const percentage: number = exscore / max;

  if (exscore === 0) {
    return "NO PLAY";
  }
  if (percentage > 0 && percentage < 1 / 9) {
    return `F+${exscore}`;
  }
  if (percentage >= 1 / 9 && percentage < 2 / 9) {
    return `E-${Math.ceil((max * 2) / 9) - exscore}`;
  }
  if (percentage >= 2 / 9 && percentage < 2.5 / 9) {
    return `E+${exscore - Math.ceil((max * 2) / 9)}`;
  }
  if (percentage >= 2.5 / 9 && percentage < 3 / 9) {
    return `D-${Math.ceil((max * 3) / 9) - exscore}`;
  }
  if (percentage >= 3 / 9 && percentage < 3.5 / 9) {
    return `D+${exscore - Math.ceil((max * 3) / 9)}`;
  }
  if (percentage >= 3.5 / 9 && percentage < 4 / 9) {
    return `C-${Math.ceil((max * 4) / 9) - exscore}`;
  }
  if (percentage >= 4 / 9 && percentage < 4.5 / 9) {
    return `C+${exscore - Math.ceil((max * 4) / 9)}`;
  }
  if (percentage >= 4.5 / 9 && percentage < 5 / 9) {
    return `B-${Math.ceil((max * 5) / 9) - exscore}`;
  }
  if (percentage >= 5 / 9 && percentage < 5.5 / 9) {
    return `B+${exscore - Math.ceil((max * 5) / 9)}`;
  }
  if (percentage >= 5.5 / 9 && percentage < 6 / 9) {
    return `A-${Math.ceil((max * 6) / 9) - exscore}`;
  }
  if (percentage >= 6 / 9 && percentage < 6.5 / 9) {
    return `A+${exscore - Math.ceil((max * 6) / 9)}`;
  }
  if (percentage >= 6.5 / 9 && percentage < 7 / 9) {
    return `AA-${Math.ceil((max * 7) / 9) - exscore}`;
  }
  if (percentage >= 7 / 9 && percentage < 7.5 / 9) {
    return `AA+${exscore - Math.ceil((max * 7) / 9)}`;
  }
  if (percentage >= 7.5 / 9 && percentage < 8 / 9) {
    return `AAA-${Math.ceil((max * 8) / 9) - exscore}`;
  }
  if (percentage >= 8 / 9 && percentage < 8.5 / 9) {
    return `AAA+${exscore - Math.ceil((max * 8) / 9)}`;
  }
  if (percentage >= 17 / 18) {
    return `MAX-${max - exscore}`;
  }
  if (exscore === max) {
    return `MAX+0`;
  }
  return "";
};
