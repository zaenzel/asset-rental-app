import axios from "axios";
import { axiosInstance } from "./axios";

export const getDetailProduct = async (slug: string) => {
  try {
    const res = await axiosInstance.get(`/product/${slug}`);
    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error response:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export const getProduct = async () => {
  try {
    const res = await axiosInstance.get(`/product`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error response:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

export const addProduct = async (product: FormData) => {
  try {
    const res = await axiosInstance.post(`/product`, product, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error response:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
