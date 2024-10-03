"use client";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { useContext, useEffect, useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import { cartContext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import Cart from "./Cart";
const Header = () => {
  let [openSide, setOpenSide] = useState(false);
  let [logIn, setLogin] = useState(false);
  let { carts, setCarts } = useContext(cartContext);
  let [openCart, setOpenCart] = useState(false);
  let { user } = useUser();
  let getAllProductsFromCart_ = async () => {
    await CartApis.getProductsFromCart(
      user?.primaryEmailAddress?.emailAddress
    ).then((res) => {
      let data = res.data.data;
      data.forEach((item) => {
        setCarts((prev) => {
          return [...prev, { id: item.documentId, product: item.products[0] }];
        });
      });
    });
  };
  useEffect(() => {
    setLogin(
      ["sign-in", "sign-up"].some((term) => window.location.href.includes(term))
    );
  }, [window.location.href]);
  useEffect(() => {
    getAllProductsFromCart_();
  }, [user]);
  return (
    !logIn && (
      <header className="bg-white py-4 shadow-md">
        <div className="container flex justify-between items-center   gap-8  ">
          <Link href={"/"}>
            <Image
              className="w-[120px] sm:w-[150px]"
              width={150}
              height={100}
              src="/logo.svg"
              alt="Logo"
            />
          </Link>
          <div className="flex   flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#">
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#">
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#">
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#">
                    Contact us
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <Link
                    className="block rounded-md bg-primary px-4 sm:px-5 py-1.5 sm:py-2.5 text-sm font-medium text-white transition hover:bg-sky-600"
                    href="/sign-in">
                    Login
                  </Link>

                  <Link
                    className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primary/75 sm:block"
                    href="/sign-up">
                    Register
                  </Link>
                </div>
              ) : (
                <div className="flex items-center gap-4 relative ">
                  <h2 className="flex items-center gap-1">
                    <FaCartShopping
                      className="cursor-pointer"
                      onClick={() => setOpenCart(!openCart)}
                      size={25}
                    />{" "}
                    ({carts?.length})
                  </h2>
                  <UserButton afterSignOutUrl="/" />
                  {openCart && <Cart setOpenCart={setOpenCart} />}
                </div>
              )}

              <button
                onClick={() => setOpenSide(true)}
                className="block rounded bg-gray-100 p-1.5  sm:p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {openSide && (
              <div className="flex md:hidden">
                <Sidebar openSide={openSide} setOpenSide={setOpenSide} />
                <div
                  className={`fixed inset-0 transition-all duration-300 ${
                    openSide ? "w-full" : "w-0"
                  }  h-full bg-white/30 dark:bg-black/30 backdrop-blur-md backdrop-saturate-150 border z-[2]  border-white/30 shadow-lg  p-8`}></div>
              </div>
            )}
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
