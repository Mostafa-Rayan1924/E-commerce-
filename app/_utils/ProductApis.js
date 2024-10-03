import axiosClient from "./axiosClient";

let getAllProducts = () => axiosClient.get("/products?populate=*");
let getProductById = async (id) =>
  await axiosClient.get(`/products/${id}?populate=*`);
let getProductByCat = (cat) =>
  axiosClient.get(`/products?filters[Category][$eq]=${cat}&populate=*`);
export default {
  getAllProducts,
  getProductById,
  getProductByCat,
};
