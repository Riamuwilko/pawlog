import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Do you want your pet to be healthier
          </h1>
          <p className="mb-8 leading-relaxed">
            Introducing our Pet Calorie Tracker App – the ultimate solution to
            ensure your furry friend’s well-being! Monitor their calorie intake,
            set customized meal plans, and track their activity levels to ensure
            they stay fit and happy. With our user-friendly interface, taking
            care of your pet has never been easier.
          </p>
          <div className="flex justify-center">
            <Link href="/dashboard" passHref>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Get Started
                </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image src="/hero.jpg" width={720} height={600} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
