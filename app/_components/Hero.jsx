const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex h-[65vh] md:h-[85vh] ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome to Our Store
            <strong className="font-extrabold text-primary sm:block">
              Shop the Latest Trends
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Comfort meets style with our Products. Perfect fit, premium fabric,
            and available in various sizes and colors.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-500 focus:outline-none focus:ring  sm:w-auto"
              href="#">
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-sky-500 focus:outline-none focus:ring  sm:w-auto"
              href="#">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
