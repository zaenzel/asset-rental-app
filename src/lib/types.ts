import { SessionOptions } from "iron-session";

export type LoginTypes = {
  email: string;
  password: string;
};

export type RegistTypes = {
  fullname: string;
  contact: number;
  address: string;
  email: string;
  password: string;
};

export type AddProductTypes = {
  name: string;
  description: string;
  price: number;
  category: string;
  image: FileList | null;
};

export type ProductTypes = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: FileList | null;
  isAdmin: boolean;
};

export type Preview = {
  startDate: string;
  endDate: string;
  hoursDifference: number;
  next: boolean;
};

interface DropDownValueTypes {
  id: number;
  name: string;
}

export interface OfferTypes {
  date: Date;
  duration: number;
}

export type DropDownItemTypes = DropDownValueTypes[];

export interface SessionData {
  userId?: string;
  name?: string;
  isAdmin?: boolean;
  isLoggedIn: boolean;
  token?: string;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_KEY_SESSION!,
  cookieName: "ito-session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};
