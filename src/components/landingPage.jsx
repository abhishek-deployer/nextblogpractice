import axios from "axios";
import ReadMore from "./readMore";
import Image from "next/image";
// import Head from "next/head";
export const metadata = {
  title: 'Landing page App',
  description: 'Product generated',
}

async function getProducts() {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    return res.data.products;
  } catch (error) {
    console.error("Error fetching products", error);
    throw error; // Re-throw the error to handle it in the calling code
  }
}


const LandingPage = async () => {
  try {
    const products = await getProducts();

    return (
      <>
       {/* <Head>
        <title>Landing page App</title>
        <meta name="description" content="Product generated" />
      </Head> */}
        <div className="mt-10 text-center center text-orange-500 text-4xl font-bold underline mb-3">Product Page</div>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {products.map((data) => (
            <div key={data.id} className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image className="rounded-t-lg h-80" src={data?.images?.[1] ?? "/image/bicycle.png"} alt="" width={400} height={400} />
              </a>
              <div className="p-5 h-40 ">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.description.slice(0,60)}
                </p>
                <ReadMore id={data.id} />
              </div>
            </div>
          ))}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error in LandingPage component", error);
    return (
      <>
        <div className="text-center center text-red-500">
          Error loading products.
        </div>
      </>
    );
  }
};

export default LandingPage;
