import { booksData } from "./books";
import { acData } from "./ac";
import { computerData } from "./computers";
import { fridgeData } from "./fridge";
import { furnitureData } from "./furniture";
import { kitchenData } from "./kitchen";
import { menData } from "./men";
import { watchData } from "./watch";
import { womanData } from "./woman";
import { mobileData } from "./mobiles";

// add your other data imports…

export const allProducts = [
  ...booksData,
  ...acData,
  ...computerData,
  ...fridgeData,
  ...furnitureData,
  ...kitchenData,
  ...menData,
  ...watchData,
  ...womanData,
  ...mobileData
  // ...other arrays
];
