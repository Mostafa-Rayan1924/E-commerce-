"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_component/CheckoutForm";
import { useSearchParams } from "next/navigation";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

const CheckOut = () => {
  let amount = useSearchParams();
  const options = {
    mode: "payment",
    currency: "usd",
    amount: Number(amount?.get("amount")),
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(amount?.get("amount"))} />
    </Elements>
  );
};

export default CheckOut;
