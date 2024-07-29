"use server";

import axios from "axios";
import {
  LoginTypes,
  RegistTypes,
  SessionData,
  defaultSession,
  sessionOptions,
} from "../types";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function userRegister(user: RegistTypes) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
      {
        name: user.fullname,
        contact: user.contact,
        address: user.address,
        role: "customer",
        email: user.email,
        password: user.password,
      }
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error response:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}

export async function userLogin(user: LoginTypes) {
  const session = await getSession();
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
      {
        email: user.email,
        password: user.password,
      }
    );

    session.name = data.profile.name;
    session.isAdmin = data.profile.role === 'admin'
    session.userId = data.profile.id
    session.token = data.access_token
    session.isLoggedIn = true

    await session.save()

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error response:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  // CHECK THE USER IN THE DB
  // session.isBlocked = isBlocked;
  // session.isPro = isPro;

  return session;
};

export const logout = async () => {
  const session = await getSession()
  session.destroy()
}