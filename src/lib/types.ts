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

export interface BookingTypes {
  user_id: number;
  product_id: number;
  start_booking_date: string;
  end_booking_date: string;
}

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  price_per_hour: number;
  description: string;
  image: string;
  category: string;
}

export interface IUser {
  id: number;
  name: string;
  contact: string;
  address: string;
  role: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Transaction {
  id: number;
  user_id: number;
  product_id: number;
  start_booking_date: string;
  end_booking_date: string;
  price_per_hour: number;
  booking_duration: number;
  price_total: number;
  status: string;
  payment_status: string;
  payment_total: number;
  created_at: string;
  updated_at: string;
  product: IProduct;
  user: IUser;
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
