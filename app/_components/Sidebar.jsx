import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { RiCloseFill } from "react-icons/ri";

const Sidebar = ({ openSide, setOpenSide }) => {
  let { user } = useUser();

  return (
    <div
      onClick={() => setOpenSide(false)}
      className={`flex flex-col transition-all duration-500 fixed top-0 w-[70%] z-10 justify-between border-e bg-white h-screen ${
        openSide ? "left-0" : "-left-72"
      }`}>
      <div
        onClick={() => setOpenSide(false)}
        className="absolute top-3 bg-primary text-white right-5 size-8 hover:bg-sky-700 cursor-pointer rounded-full grid place-items-center">
        <RiCloseFill size={25} />
      </div>
      <div className="px-4 py-6">
        <Link href={"/"}>
          <Image
            className="w-[120px] sm:w-[150px]"
            width={150}
            height={100}
            src="/logo.svg"
            alt="Logo"
          />
        </Link>

        <ul className="mt-6 space-y-1">
          <li>
            <a
              href="#"
              className="block rounded-lg  px-4 py-2 text-sm font-medium text-gray-700">
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              Services
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              Contact us
            </a>
          </li>
          {!user && (
            <li>
              <a
                className=" rounded-md text-white text-center px-5 py-2.5 w-full text-sm font-medium bg-primary transition hover:bg-primary/75 block"
                href="#">
                Register
              </a>
            </li>
          )}
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="#"
          className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <img
            alt=""
            src={user?.imageUrl}
            className="size-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">{user?.fullName}</strong>

              <span>{user?.primaryEmailAddress?.emailAddress}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
