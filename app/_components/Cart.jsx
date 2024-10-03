"use client";
import Link from "next/link";
import { cartContext } from "../_context/CartContext";
import { useContext, useEffect } from "react";

const Cart = ({ setOpenCart }) => {
  let { carts, setCarts } = useContext(cartContext);
  useEffect(() => {
    document.documentElement.addEventListener("click", (e) => {
      setOpenCart(false);
    });
  }, []);
  return (
    <div
      className="absolute z-[20] top-[50px] right-[-50px] sm:right-0  w-[80vw] max-w-sm border max-h-[300px] overflow-y-auto bg-gray-100 rounded-lg shadow px-2 py-4 sm:px-6 lg:px-8"
      aria-modal="true"
      role="dialog"
      tabIndex="-1">
      <button
        onClick={() => setOpenCart(false)}
        className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
        <span className="sr-only">Close cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {carts.length > 0 ? (
            carts.map((item) => {
              return (
                <li className="flex items-center gap-4">
                  <img
                    src={item?.product?.banner?.url}
                    alt=""
                    className="size-16 rounded shadow-lg object-cover"
                  />

                  <div>
                    <h3 className="text-sm text-gray-900">
                      {item?.product?.Title}
                    </h3>

                    <dl className="mt-0.5 space-y-px text-[12px] text-gray-600">
                      <div>
                        <dt className="inline">Category: </dt>
                        <dd className="inline">{item?.product?.Category}</dd>
                      </div>

                      <div>
                        <dt className="inline">Price: </dt>
                        <dd className="inline">{item?.product?.price}</dd>
                      </div>
                    </dl>
                  </div>
                </li>
              );
            })
          ) : (
            <h2 className="text-center pb-2 font-bold">Cart is empty</h2>
          )}
        </ul>

        {carts.length > 0 ? (
          <div className="space-y-4 text-center">
            <Link
              href="/cart"
              className="block rounded border-2 border-primary  bg-white text-primary px-5 py-3 text-sm transition-all duration-300 hover:bg-primary hover:text-white  ">
              View my cart ({carts.length})
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
