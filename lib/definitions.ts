export type Weather = {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Variant = {
  id: number;
  sku: string;
  stock: number;
  price: number;
  size: string;
};

export type File = {
  name: string;
  size: number;
  type: string;
};

export interface Login{
  username: string;
  password: string;
} 

