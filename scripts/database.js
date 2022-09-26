/*
    1. Create arrays for the following data.
        a. guests
        b. parkLocations
        c. services
        d. parkLocationServices
    2. I will need to create/export getter functions for the above arrays
*/

const database = {
  guests: [
    {
      id: 1,
      firstName: "Lord",
      lastName: "Voldermort",
      parkLocationId: 1,
    },
    {
      id: 2,
      firstName: "Albus",
      lastName: "Dumbledore",
      parkLocationId: 1,
    },
    {
      id: 3,
      firstName: "Severus",
      lastName: "Snape",
      parkLocationId: 1,
    },
    {
      id: 4,
      firstName: "Draco",
      lastName: "Malfoy",
      parkLocationId: 3,
    },
    {
      id: 5,
      firstName: "Luna",
      lastName: "Lovegood",
      parkLocationId: 3,
    },
    {
      id: 6,
      firstName: "Ron",
      lastName: "Weasley",
      parkLocationId: 7,
    },
    {
      id: 7,
      firstName: "Bellatrix",
      lastName: "Lestrange",
      parkLocationId: 9,
    },
    {
      id: 8,
      firstName: "Sirius",
      lastName: "Black",
      parkLocationId: 11,
    },
    {
      id: 9,
      firstName: "Neville",
      lastName: "Longbottom",
      parkLocationId: 4,
    },
    {
      id: 10,
      firstName: "Minerva",
      lastName: "McGonagall",
      parkLocationId: 6,
    },
  ],
  parkLocations: [
    {
      id: 3,
      name: "Lodge",
      section: "northwest",
    },
    {
      id: 2,
      name: "Lost Wolf Hiking Trail",
      section: "northern ",
    },
    {
      id: 1,
      name: "Chamfort River",
      section: "northeast",
    },
    {
      id: 4,
      name: "Gander River",
      section: "southwest",
    },
    {
      id: 5,
      name: "Campgrounds",
      section: "southern",
    },
    {
      id: 6,
      name: "Pine Bluffs Trails",
      sesction: "southeast",
    },
  ],
  services: [
    {
      id: 1,
      service: "Canoeing",
    },
    {
      id: 2,
      service: "Children Play Area",
    },
    {
      id: 3,
      service: "Fishing",
    },
    {
      id: 4,
      service: "Food Vendors",
    },
    {
      id: 5,
      service: "Hiking",
    },
    {
      id: 6,
      service: "Hotel",
    },
    {
      id: 7,
      service: "Information",
    },
    {
      id: 8,
      service: "Lodging",
    },
    {
      id: 9,
      service: "Park Office",
    },
    {
      id: 10,
      service: "Parking",
    },
    {
      id: 11,
      service: "Picnicking",
    },
    {
      id: 12,
      service: "Rafting",
    },
    {
      id: 13,
      service: "Restaurant",
    },
    {
      id: 14,
      service: "Rock Climbing",
    },
    {
      id: 15,
      service: "Zip Lines",
    },
  ],
  parkLocationsServices: [
    {
      id: 1,
      parkLocationId: 1,
      serviceId: 1,
    },
    {
      id: 2,
      parkLocationId: 1,
      serviceId: 3,
    },
    {
      id: 3,
      parkLocationId: 1,
      serviceId: 12,
    },
    {
      id: 4,
      parkLocationId: 2,
      serviceId: 5,
    },
    {
      id: 5,
      parkLocationId: 2,
      serviceId: 11,
    },
    {
      id: 6,
      parkLocationId: 2,
      serviceId: 14,
    },
    {
      id: 7,
      parkLocationId: 3,
      serviceId: 6,
    },
    {
      id: 8,
      parkLocationId: 3,
      serviceId: 13,
    },
    {
      id: 9,
      parkLocationId: 3,
      serviceId: 8,
    },
    {
      id: 10,
      parkLocationId: 3,
      serviceId: 10,
    },
    {
      id: 11,
      parkLocationId: 3,
      serviceId: 7,
    },
    {
      id: 12,
      parkLocationId: 3,
      serviceId: 11,
    },
    {
      id: 13,
      parkLocationId: 4,
      serviceId: 3,
    },
    {
      id: 14,
      parkLocationId: 4,
      serviceId: 5,
    },
    {
      id: 15,
      parkLocationId: 5,
      serviceId: 2,
    },
    {
      id: 16,
      parkLocationId: 5,
      serviceId: 9,
    },
    {
      id: 17,
      parkLocationId: 5,
      serviceId: 7,
    },
    {
      id: 18,
      parkLocationId: 5,
      serviceId: 8,
    },
    {
      id: 19,
      parkLocationId: 5,
      serviceId: 10,
    },
    {
      id: 20,
      parkLocationId: 6,
      serviceId: 5,
    },
    {
      id: 21,
      parkLocationId: 6,
      serviceId: 11,
    },
    {
      id: 22,
      parkLocationId: 6,
      serviceId: 4,
    },
  ],
};

export const getGuests = () => {
  return database.guests.map((guest) => ({ ...guest }));
};

export const getParkLocations = () => {
  return database.parkLocations.map((parkLocation) => ({ ...parkLocation }));
};

export const getServices = () => {
  return database.services.map((service) => ({ ...service }));
};

export const getParkLocationServices = () => {
  return database.parkLocationsServices.map((parkLocationService) => ({
    ...parkLocationService,
  }));
};
