import axios from "axios";
import ReadMore from "./readMore";
import Image from "next/image";
async function getProducts() {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    console.log("Response", res.data.products);
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
        <div className="text-center center text-orange-500">LandingPage</div>
        <div className="flex flex-wrap gap-5 justify-center items-center">
        {products.map((data) => (
          // <div key={data.id}> {/* Add a key to each iterated element for React */}
          //   <h1>Product name: {data.title}</h1>
          // </div>
          
          <div  key={data.id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image class="rounded-t-lg" src={data?.images?.[1] ?? "/image/bicycle.png"} alt="" width={400} height={500} />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <ReadMore id={data.id}/>
             
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
