import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
const WorkSans = Work_Sans({ subsets: ["latin"], weights: ["400", "700"] });
import CartContext from "./_context/CartContext";
export const metadata = {
  title: "E-commerce",
  description:
    "An online store offering a seamless shopping experience with a wide range of products, secure payments, and fast delivery.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html className="overflow-x-hidden" lang="en">
        <body className={`${WorkSans.className}    `}>
          <CartContext>
            <Header />
            {children}
            <Footer />
          </CartContext>
        </body>
      </html>
    </ClerkProvider>
  );
}
