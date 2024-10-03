"use client";
import { useEffect, useState } from "react";
import ProductApis from "../_utils/ProductApis";
import ProductCard from "./ProductCard";
import SkeletonProCard from "./SkeletonProCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  async function getAllProducts() {
    try {
      return await ProductApis.getAllProducts().then((res) => {
        setProducts(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="my-10">
      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          <SkeletonProCard />
          <SkeletonProCard />
          <SkeletonProCard />
          <SkeletonProCard />
        </div>
      )}
    </div>
  );
};

export default ProductList;
