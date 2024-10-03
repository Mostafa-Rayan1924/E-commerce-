import Image from "next/image";
import Link from "next/link";

function PaymentConfirm() {
  return (
    <div className="flex flex-col items-center h-[80vh] justify-center px-5 mt-4">
      <Image src="/verified.gif" alt="check" width={130} height={130} />
      <h2 className="text-[24px]">Payment Successful !</h2>
      <h2 className="text-[17px] text-center mt-6 text-gray-500">
        We sent an email with your order confirmation
      </h2>
      <Link
        href="https://mail.google.com/mail/u/0/?hl=ar#inbox"
        className="p-2 mt-6 text-white rounded-md bg-primary">
        Go to Home
      </Link>
    </div>
  );
}

export default PaymentConfirm;
