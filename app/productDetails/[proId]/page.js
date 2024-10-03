"use client";
import BreadCrumb from "../../_components/BreadCrumb";
import ProductApis from "../../_utils/ProductApis";
import { useEffect, useState } from "react";
import ProInfo from "../_components/ProInfo";
import Probanner from "../_components/Probanner";
import ProductCard from "../../_components/ProductCard";
import SkeletonProCard from "../../_components/SkeletonProCard";
const ProductDetailsItem = ({ params }) => {
  let [pro, setPro] = useState({});
  let [simProducts, setSimProducts] = useState([]);
  // get product by id
  async function getProductById_() {
    try {
      await ProductApis.getProductById(params?.proId).then((res) => {
        setPro(res.data.data);
        getProductByCat_(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  // filter by category to get similar products
  let getProductByCat_ = async (product) => {
    try {
      await ProductApis.getProductByCat(product?.Category).then((res) => {
        let filterData = res.data.data.filter((item) => {
          return item.id !== product.id;
        });
        setSimProducts(filterData);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductById_();
  }, [params?.proId]);
  // maping to render similar products
  let productsMap = simProducts.slice(0, 4).map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  return (
    <div className="container my-10">
      <BreadCrumb proId={pro?.id} />
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center my-10 gap-4">
        <Probanner pro={pro} />
        <ProInfo pro={pro} />
      </div>
      <h2 className="text-2xl mt-28">Similar Products</h2>
      {simProducts.length > 0 ? (
        <div className=" grid grid-cols-2 md:grid-cols-3 my-5 lg:grid-cols-4 gap-2 sm:gap-4">
          {productsMap}
        </div>
      ) : (
        <div className="my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          <SkeletonProCard />
          <SkeletonProCard />
          <SkeletonProCard />
          <SkeletonProCard />
        </div>
      )}
    </div>
  );
};

export default ProductDetailsItem;
