export type Person = {
  name: string;
  age: number;
  hobby: string[];
};
export const averageAge = (allUsers: Person[]) => {
  let allAges = 0;
  allUsers.forEach((u) => {
    allAges += u.age;
  });
  return allAges / allUsers.length;
};

export const averageNumberOfHobbies = (allUsers: Person[]) => {
  let AllHobbies = 0;
  allUsers.forEach((u) => {
    AllHobbies += u.hobby.length;
  });
  return AllHobbies / allUsers.length;
};

export const oldestUser = (allUsers: Person[]) => {
  let oldest;
  let ages: number[] = [];
  allUsers.forEach((u) => {
    ages.push(u.age);
  });
  oldest = ages.sort(Math.max).reverse().pop();
  return oldest;
};
export const oldestPerson = (allUsers: Person[]) => {
  let oldest;
  let ages: Person[] = [];
  allUsers.forEach((u) => {
    ages.push(u);
  });
  oldest = ages.sort().reverse().pop();

  return console.log(
    `den äldsta användaren heter ${oldest?.name} och är ${oldest?.age} år gammal`
  );
};

//*************TODO få denna att fungera***************
//*****************************************************
export const mostHobbies = (allUsers: Person[]) => {
  let hobbies: any;
  let hobbyamount: any[] = [];
  allUsers.forEach((u) => {
    hobbyamount.push(u.hobby.length);
  });
  hobbyamount.sort((a, b) => b - a).splice(1, hobbyamount.length);

  return console.log(hobbyamount);
};
