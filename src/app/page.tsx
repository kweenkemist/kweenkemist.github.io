import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import Elixir from "../assets/elixir.jpg";
import Spirulina from "../assets/spirulina.jpg";
import SlimCee from "../assets/slimcee.jpg";
import Kojic from "../assets/kojic-papaya.jpg";
import MyJeju from "../assets/my-jeju.jpg";
import AlgiCleanz from "../assets/algicleanz.jpg";
import KweenKemist from "../assets/kween-kemist.jpg";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Kween Kemist&apos;s Regimen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Welcome to Kween Kemist&apos;s Regimen
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            I am pleased to promote these amazing products from GFOX international:
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1: Elixir Placenta */}
            <div className="flex flex-col items-center">
              <Image
                src={Elixir}
                alt="Elixir"
                width={300}
                height={200}
              />
              <h2 className="mt-4 text-xl text-gray-800 font-bold">Elixir Placenta</h2>
              <p className="mt-2 text-gray-600 text-center">
                Affordable stem cell with Elixir Placenta.
              </p>
              <Link legacyBehavior href="https://www.facebook.com/lookyoungerwithelixirplacenta">
                <a target="_blank" className="mt-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Learn More
                </a>
              </Link>
            </div>

            {/* Product 2: Spirulina */}
            <div className="flex flex-col items-center">
              <Image
                src={Spirulina}
                alt="Spirulina"
                width={300}
                height={200}
              />
              <h2 className="mt-4 text-xl text-gray-800 font-bold">Spirulina</h2>
              <p className="mt-2 text-gray-600 text-center">
                Boost your health with our Spirulina supplement.
              </p>
              <Link legacyBehavior href="https://www.facebook.com/behealthywithgfoxxspirulina">
                <a target="_blank" className="mt-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Learn More
                </a>
              </Link>
            </div>

            {/* Product 3: SlimCee */}
            <div className="flex flex-col items-center">
              <Image
                src={SlimCee}
                alt="Slimcee"
                width={300}
                height={200}
              />
              <h2 className="mt-4 text-xl text-gray-800 font-bold">SlimCee</h2>
              <p className="mt-2 text-gray-600 text-center">
                Achieve your body goals with SlimCee.
              </p>
              <Link legacyBehavior href="https://www.facebook.com/kweenkemist">
                <a target="_blank" className="mt-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Learn More
                </a>
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 4: Kojic Papaya */}
            <div className="flex flex-col items-center">
              <Image
                src={Kojic}
                alt="Kojic"
                width={300}
                height={200}
              />
              <h2 className="mt-4 text-xl text-gray-800 font-bold">Kojic Papaya Soap</h2>
              <p className="mt-2 text-gray-600 text-center">
                Achieve skin glow with Kojic papaya soap.
              </p>
              <Link legacyBehavior href="https://www.facebook.com/glowingskinachieved">
                <a target="_blank" className="mt-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Learn More
                </a>
              </Link>
            </div>

            {/* Product 5: My Jeju */}
            <div className="flex flex-col items-center">
              <Image
                src={MyJeju}
                alt="MyJeju"
                width={300}
                height={200}
              />
              <h2 className="mt-4 text-xl text-gray-800 font-bold">My Jeju</h2>
              <p className="mt-2 text-gray-600 text-center">
                Rejuvenate your skin with My Jeju.
              </p>
              <Link legacyBehavior href="https://www.facebook.com/glowingskinachieved">
                <a target="_blank" className="mt-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Learn More
                </a>
              </Link>
            </div>

            {/* Product 6: Algicleanz Go+ */}
            <div className="flex flex-col items-center">
              <Image
                src={AlgiCleanz}
                alt="Algicleanz"
                width={300}
                height={200}
              />
              <h2 className="mt-4 text-xl text-gray-800 font-bold">Algicleanz Go+</h2>
              <p className="mt-2 text-gray-600 text-center">
                Cleanse your body digestion with Algicleanz Go+.
              </p>
              <Link legacyBehavior href="https://www.facebook.com/kweenkemist">
                <a target="_blank" className="mt-4 inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Learn More
                </a>
              </Link>
            </div>
          </div>

          <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl text-gray-800 font-bold mb-4">About Kween Kemist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-1">
                  <p className="text-lg text-gray-600 font-light mb-4">
                    Melody Jacob is a registered Chemist in the Philippines with a
                    passion for entrepreneurship. She holds a Bachelor of Science
                    degree in Chemistry from the Bicol University in the Philippines and has
                    over 4 years of experience both in the chemical industry and
                    entrepreneurship combined.
                  </p>
                </div>
                <div className="md:col-span-1">
                  <Image
                    src={KweenKemist}
                    alt="Kween Kemist"
                    className="w-full h-auto rounded-lg"
                    />
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm font-light">
            &copy; {new Date().getFullYear()} Kween Kemist. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0">
            <Link legacyBehavior href="https://www.facebook.com/kweenkemist">
              <a target="_blank" className="mx-4 hover:text-gray-400">
                <FaFacebookF size={17} />
              </a>
            </Link>
            <Link legacyBehavior href="https://www.instagram.com/raketerangkemist/">
              <a target="_blank" className="mx-4 hover:text-gray-400">
                <FaInstagram size={17} />
              </a>
            </Link>
            <Link legacyBehavior href="https://www.linkedin.com/in/melody-jacob-b3244715a/">
              <a target="_blank" className="mx-4 hover:text-gray-400">
                <FaLinkedin size={17} />
              </a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}