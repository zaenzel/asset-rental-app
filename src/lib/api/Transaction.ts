import axios from "axios";
import { axiosInstance } from "./axios";
import { BookingTypes } from "../types";
import useSWR from "swr";

export const useTransaction = ({
  user_id,
  isAdmin,
  status,
}: {
  user_id?: string;
  isAdmin?: boolean;
  status?: string;
}) => {
  const { data, error, isLoading } = useSWR(
    isAdmin
      ? `/transaction?status=${status}`
      : `/transaction?user_id=${user_id}&status=${status}`
  );
  return {
    data,
    error,
    isLoading,
  };
};

export const useTransactionDetail = ({ id }: { id: number }) => {
  const { data, error, isLoading } = useSWR(
    id !== 0 && id !== undefined && `/transaction/${id}`
  );
  return {
    data,
    error,
    isLoading,
  };
};

export const addTransaction = async (data: BookingTypes) => {
  try {
    const res = await axiosInstance.post("/transaction", data);
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

export const updateTransaction = async ({
  id,
  status,
  payment_status,
  payment_total,
}: {
  id: number;
  status?: string;
  payment_status?: string;
  payment_total?: string;
}) => {
  try {
    const res = await axiosInstance.put(`/transaction/${id}`, {
      id,
      status,
      payment_status,
      payment_total,
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
