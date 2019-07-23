import faker from "faker";
import { Mappable } from "./CustomMap";
export class User implements Mappable {
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
  color = "red";
  markerContent() {
    return `User name is ${this.name}`;
  }
}
