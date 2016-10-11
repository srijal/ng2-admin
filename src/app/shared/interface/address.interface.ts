export interface IAddress {
  street: string;
  city: string;
  zip: number;
  country?: string;
  lat?: string;
  lng?: string;
}

export class Address implements IAddress {

  street: string;
  city: string;
  zip: number;

  constructor(street: string, zip: number, city: string) {
    this.street = street;
    this.city = city;
    this.zip = zip;
  }
}
