/*
    1. import the getter function for parkLocations from database.js

    2. create/export a function that will loop through the parkLocations and return an html string

    3. I need an eventListener so that when a location is cliked the number of guests show in a pop up window shows "there are (number of guests) guests in this area"
*/
import { getParkLocations } from "./database.js";
import { getGuests } from "./database.js";
import { filterServicesByLocaion } from "./services.js";
import { getServices } from "./database.js";
import { getParkLocationServices } from "./database.js";

const locations = getParkLocations();
const guests = getGuests();
const services = getServices();
const parkLocationService = getParkLocationServices();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("location")) {
    const [, locationPrimaryKey] = itemClicked.id.split("--");
    for (const location of locations) {
      if (location.id === parseInt(locationPrimaryKey)) {
        let numberOfGuests = 0;
        for (const guest of guests) {
          if (guest.parkLocationId === parseInt(locationPrimaryKey)) {
            numberOfGuests++;
          }
        }
        window.alert(`There are ${numberOfGuests} guests in this area`);
      }
    }
  }
});

export const parkLocation = (service) => {
  let test = [];
  for (const location of locations) {
    for (const serviceLocation of parkLocationService) {
      if (
        serviceLocation.parkLocationId === location.id &&
        serviceLocation.serviceId === service.id
      ) {
        test.push(location.name);
      }
    }
  }
  return test;
};

export const parkLocationHTML = () => {
  let parkLocationString = `<div id=park-location>`;
  for (const location of locations) {
    parkLocationString += filterServicesByLocaion(location);
  }
  parkLocationString += "</div>";
  return parkLocationString;
};
