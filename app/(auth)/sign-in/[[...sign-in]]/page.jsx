import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen gap-3 lg:grid-cols-12">
        <section className="relative flex h-32 items-center bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <Link className="block text-white" href="/">
              <Image
                className="w-[120px] sm:w-[150px]"
                width={150}
                height={100}
                src="/logo.svg"
                alt="Logo"
              />
            </Link>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to Rayanco 🦑
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Comfort meets style with our Products. Perfect fit, premium
              fabric, and available in various sizes and colors.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <Link className="block text-white" href="/">
                <Image
                  className="w-[120px] sm:w-[150px]"
                  width={150}
                  height={100}
                  src="/logo.svg"
                  alt="Logo"
                />
              </Link>

              <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Rayanco 🦑
              </h1>

              <p className="mt-4 leading-relaxed mb-5 text-gray-500">
                Comfort meets style with our Products. Perfect fit, premium
                fabric, and available in various sizes and colors.
              </p>
            </div>

            <SignIn />
          </div>
        </main>
      </div>
    </section>
  );
}
