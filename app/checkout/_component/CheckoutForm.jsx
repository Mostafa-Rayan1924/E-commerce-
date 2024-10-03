"use client";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../_context/CartContext";
import SkeletonCartItem from "../../_components/SkeletonCartItem";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import CartApis from "../../_utils/CartApis";
import { useUser } from "@clerk/nextjs";

const CheckoutForm = ({ amount }) => {
  let { carts, setCarts } = useContext(cartContext);
  let [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [errormessage, setErrorMessage] = useState();
  const stripe = useStripe();
  const elements = useElements();
  let { user } = useUser();
  async function getSecretKey() {
    try {
      let res = await axios.post("/api/create-intent", { amount: amount });
      setClientSecret(res.data);
    } catch (error) {
      console.error("Error fetching client secret: ", error);
    }
  }
  useEffect(() => {
    getSecretKey();
  }, []);
  const sendEmail = async () => {
    const res = await fetch("api/send-email", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
        email: user.primaryEmailAddress.emailAddress,
        fullName: user.fullName,
      }),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!stripe || !elements || !clientSecret) {
      console.error("Stripe.js or client secret not loaded yet.");
      return;
    }
    // delete all items from strapi and cart
    carts.map((item) =>
      CartApis.deleteItemFromCart(item?.id)
        .then((res) => {
          console.log("deleting" + res.data);
        })
        .catch((error) => {
          console.log(`Error deleting item `, error);
        })
    );
    //  send email
    sendEmail();
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setLoading(false);
      setErrorMessage(submitError.message);
      return;
    }

    const result = await stripe.confirmPayment({
      clientSecret: clientSecret,
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payconfirm",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log("Payment successful!");
    }
  };

  return (
    <form className="container my-20 flex flex-col justify-center md:flex-row md:justify-between flex-wrap  gap-5">
      <div className="flex-1">
        <ul className="space-y-4 ">
          {carts.length > 0 ? (
            carts?.map((item) => {
              return (
                <li className="flex items-center gap-4">
                  <img
                    src={item?.product?.banner?.url}
                    alt=""
                    className="size-16 rounded object-cover"
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
                    </dl>
                  </div>

                  <div className="flex  flex-1 items-center justify-end gap-2">
                    <form>
                      $
                      <input
                        type="number"
                        min="1"
                        value={item?.product?.price}
                        id="Line1Qty"
                        className="h-8 w-12  rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </form>
                  </div>
                </li>
              );
            })
          ) : (
            <>
              <SkeletonCartItem /> <SkeletonCartItem />
              <SkeletonCartItem />
            </>
          )}
        </ul>
      </div>
      <div className="flex-1 ">
        <PaymentElement />
        <button
          disabled={loading}
          onClick={handleSubmit}
          className={`bg-primary mt-3 w-full transition-all duration-300 text-white py-2 ${
            loading ? "opacity-50" : ""
          } rounded-lg hover:bg-sky-700`}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
