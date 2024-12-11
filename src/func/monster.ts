//utöka så alla egenskaper för monstret skrivs ut
type monster = {
  name: string;
  age: number;
  tentacles: number;
  eyes: number;
  hasWings: boolean;
};
export const prettyPrintMonster = (m: monster[]) => {
  m.forEach((monsters) => {
    console.log(`Monster: ${monsters.name}`);
  });
};

export const averageMonsterAge = (m: monster[]): number => {
  let allAges: number = 0;
  m.forEach((ages) => {
    allAges += ages.age;
  });
  return Math.ceil(allAges / m.length);
};

export const averageNumberOfTentacles = (m: monster[]): number => {
  let allTentacles: number = 0;
  m.forEach((tentacles) => {
    allTentacles += tentacles.tentacles;
  });
  return Math.ceil(allTentacles / m.length);
};

export const numberOfMonstersWithWings = (m: monster[]): number => {
  let allWings: number = 0;
  m.forEach((wing) => {
    if (wing.hasWings === true) {
      allWings++;
    }
  });
  return allWings;
};

export const getAllNoWingedMonster = (m: monster[]) => {
  let wingedMonsters: object[] = [];
  m.forEach((hasWings) => {
    if (hasWings.hasWings === false) {
      wingedMonsters.push(hasWings);
    }
  });
  return wingedMonsters;
};
