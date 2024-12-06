import { dogs } from "../main";

type Color = "black" | "white" | "beige" | "gray" | "brown";
export type Dog = {
  name: string;
  color: Color;
};
export const numberOfColors = (d: Dog[]): number => {
  // => d.length;

  let sumColors = d.length; // funkar sålänge det inte finns transparenta hundar

  return sumColors;
};

export const commonColor = (d: Dog[]) => {
  //nedbrytning av problem
  //få en lista av färgerna
  //sök igenom listan och få fram färgen
};
