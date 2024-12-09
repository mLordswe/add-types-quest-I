import { dogs } from "../main";

type Color = "black" | "white" | "beige" | "gray" | "brown" | "blue" | "green";
export type Dog = {
  name: string;
  color: Color;
};
export const numberOfColors = (d: Dog[]): number => {
  // => d.length;
  let colors: string[] = [];
  let uniqueColor;
  d.forEach((color) => {
    colors.push(color.color);
  });
  uniqueColor = new Set(colors);
  let a = [...uniqueColor];

  return a.length;
};

export const commonColor = (d: Dog[]) => {
  //nedbrytning av problem
  //få en lista av färgerna
  //sök igenom listan och få fram färgen
  let colors: string[] = [];
  let dupes: string[];
  d.forEach((color) => {
    colors.push(color.color);

    // console.log(colors);
  });
  dupes = colors.filter((item, index) => colors.indexOf(item) !== index);
  dupes
    .sort((a: any, b: any) => a - b)
    .reverse()
    .splice(1);
  // console.log(dupes);
  return dupes;
};
