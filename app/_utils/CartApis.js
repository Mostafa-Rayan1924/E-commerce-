import { get } from "http";
import axiosClient from "./axiosClient";
let addToCart = async (params) => await axiosClient.post("/carts", params);
let getProductsFromCart = async (email) =>
  await axiosClient.get(
    `/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`
  );
let deleteItemFromCart = async (id) => await axiosClient.delete(`/carts/${id}`);
export default {
  addToCart,
  getProductsFromCart,
  deleteItemFromCart,
};
