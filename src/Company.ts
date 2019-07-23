import faker from "faker";

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude())
    };
  }
}
