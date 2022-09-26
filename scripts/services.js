/*
    1. Import services getter function from database.js
    
    2. create/export function that loops through the services and returns an html

    3. I need an eventListener so that when a service is selected a popup window show "(name of service clicked) is available in (parkLocation)"

    4. create/export function that takes in a paramenter of a location. loops through parkLocationsServices and returns an array of services that match the paramenter location.
*/
import { getServices } from "./database.js";
import { getParkLocationServices } from "./database.js";
import { parkLocation } from "./parkLocations.js";

const services = getServices();
const parkLocationService = getParkLocationServices();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("service")) {
    const [, servicePrimaryKey] = itemClicked.id.split("--");
    for (const service of services) {
      if (service.id === parseInt(servicePrimaryKey)) {
        const test = parkLocation(service);
        window.alert(`${service.service} is avilable at ${test}`);
      }
    }
  }
});

export const filterServicesByLocaion = (location) => {
  let serviceString = `<div class="loaction-tile"> <div id="location--${location.id} class="location-title" ">${location.name}</div>`;
  for (const service of services) {
    for (const serviceLocation of parkLocationService) {
      if (
        serviceLocation.parkLocationId === location.id &&
        serviceLocation.serviceId === service.id
      ) {
        serviceString += `<div id="service--${service.id}">${service.service}</div>`;
      }
    }
  }
  serviceString += `</div>`;
  return serviceString;
};

export const parkServicesHtml = () => {
  let parkSerivesString = "<div id=service-container>";
  for (const service of services) {
    parkSerivesString += `<div id="service--${service.id}" class="service-type">${service.service}</div>`;
  }
  parkSerivesString += "</div>";
  return parkSerivesString;
};
