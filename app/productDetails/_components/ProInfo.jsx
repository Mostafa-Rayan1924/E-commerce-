import { MdEventAvailable } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";
import { IoMdCart } from "react-icons/io";
import ProInfoSkeleton from "./ProInfoSkeleton";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "../../_utils/CartApis";
import { useContext, useState } from "react";
import { cartContext } from "../../_context/CartContext";
import toast, { Toaster } from "react-hot-toast";
const ProInfo = ({ pro }) => {
  let { carts, setCarts } = useContext(cartContext);
  let [loading, setLoading] = useState(false);
  let { user } = useUser();
  let router = useRouter();
  let handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      setLoading(true);
      let params = {
        data: {
          username: user?.fullName,
          email: user?.primaryEmailAddress.emailAddress,
          products: [pro?.documentId],
        },
      };
      try {
        CartApis.addToCart(params).then((res) => {
          setCarts((prev) => [...prev, { product: pro, id: res.data.data.id }]);
          toast.success("Item Added Successfully");
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };
  return (
    <div>
      {pro?.id ? (
        <>
          <h2 className="text-2xl">{pro?.Title}</h2>
          <h3 className="text-xl text-gray-400 capitalize my-1">
            {pro?.Category}
          </h3>
          <p className="text-sm">{pro?.description}</p>

          {pro.ForDelivery ? (
            <h3 className="flex items-center gap-2 capitalize my-2 text-gray-500 text-sm">
              <MdEventAvailable className="text-green-500" size={25} />{" "}
              Available for delivery
            </h3>
          ) : (
            <h3 className="flex items-center gap-2 capitalize my-2 text-gray-500 text-sm">
              <CgUnavailable className="text-red-500" size={25} />
              Not Available for delivery
            </h3>
          )}
          <h4 className="text-7xl text-primary">${pro?.price}</h4>
          <button
            onClick={handleAddToCart}
            className={`flex items-center ${
              loading
                ? "bg-gray-500 opacity-50 pointer-events-none "
                : "bg-primary"
            } transition-all duration-300 hover:bg-sky-700 hover:px-8 gap-2 bg-primary text-white py-2 px-6 rounded mt-4`}>
            <IoMdCart /> {loading ? "Wait..." : "add to cart"}
          </button>
        </>
      ) : (
        <ProInfoSkeleton />
      )}
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default ProInfo;
