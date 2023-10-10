import axios from "axios";
import Image from "next/image";
async function productDetails(id) {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  console.log("details", response.data);
  return response.data;
}

const Page = async ({ params }) => {
  const data = await productDetails(params.id);

  return (
    <>
      <h1 className="text-red-500 text-center text-2xl">
        Welcome to the product details page
      </h1>

      {/* For larger screens */}
      <div className="md:flex max-w-screen-xl mx-auto">
        <div className="flex-1">
          <Image
            className="rounded-t-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto"
            src={data?.images?.[1] ?? "/image/bicycle.png"}
            width={400}
            height={900}
          />
        </div>
        <div className="flex-1 p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          {/* Other details can go here */}
        </div>
      </div>

     
    </>
  );
};

export default Page;
