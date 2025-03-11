import moment from "moment";
import { DropDownItemTypes } from "./types";

export const dropDownItem: DropDownItemTypes = [
  {
    id: 1,
    name: "Gedung",
  },
  {
    id: 2,
    name: "Lapangan",
  },
  {
    id: 3,
    name: "Kendaraan",
  },
  {
    id: 4,
    name: "Alat - Alat Pendukung",
  },
];

export const formateDate = (date: Date) => {
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
};

export const rupiah = (value: number) => {
  return new Intl.NumberFormat("id", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
};
