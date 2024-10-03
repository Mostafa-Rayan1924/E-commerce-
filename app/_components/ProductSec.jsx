import { MdProductionQuantityLimits } from "react-icons/md";
import dynamic from "next/dynamic";
const ProductList = dynamic(() => import("./ProductList"), { ssr: false });

const ProductSec = () => {
  return (
    <div className="my-10 container">
      <h2 className="my-4 text-2xl text-2xl flex sm:border-b-2 w-fit border-dotted border-slate-500 items-center gap-2 font-bold">
        <MdProductionQuantityLimits size={25} className="text-primary" /> Our
        Latest Products
      </h2>
      <ProductList />
    </div>
  );
};

export default ProductSec;
