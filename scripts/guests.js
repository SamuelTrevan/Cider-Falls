/*
    1. I need to import the getter function from the database.    
    
    2. create/export function for guests that loops through the the array of guests and returns an html string 
*/
import { getGuests } from "./database.js";

const guestlist = getGuests();

export const guestHtml = () => {
  let guestString = "<ul>";
  for (const guest of guestlist) {
    guestString += `<li class="guest--${guest.id}">${guest.firstName} ${guest.lastName}</li>`;
  }
  guestString += "</ul>";
  return guestString;
};
