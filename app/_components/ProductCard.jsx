import Image from "next/image";
import Link from "next/link";
import { CiBoxList } from "react-icons/ci";

const ProductCard = ({ product }) => {
  return (
    <Link
      href={`/productDetails/${product?.documentId}`}
      className="p-2.5 relative rounded-lg shadow border-2 cursor-pointer border-transparent hover:border-primary transition-all duration-300">
      <Image
        src={product?.banner?.url}
        width={400}
        className=" rounded-lg"
        height={350}
        alt={product.Title}
      />
      <h2 className="text-sm sm:text-base capitalize my-2">{product.Title}</h2>
      <p className="text-gray-400 text-sm line-clamp-2 ">
        {product.description}
      </p>
      <div className="flex items-center gap-2 capitalize">
        <CiBoxList size={20} className="text-primary mt-2 font-bold" />
        <h3 className="mt-[6px]">{product.Category}</h3>
      </div>
      <span className="absolute top-2 px-1 py-[2px] text-sm sm:text-base right-2 bg-primary text-white  rounded">
        ${product.price}
      </span>
    </Link>
  );
};

export default ProductCard;
