import axios from "axios";
import Image from "next/image";
import { addItem } from "@/redux/cartSlice";
import AddBuy from "./addBuy";
async function productDetails(id) {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  return response.data;
}
export async function generateMetadata({ params }){
  const { id } = params;
  const datas = await productDetails(id);

  return {
    title: datas?.title,
    description: datas?.description,
  };
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
            {data.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data.description}
          </p>
          {/* Other details can go here */}
          <AddBuy id={data.id} name={data.title} price={data.price} img={data?.images?.[1]}/>
       
        </div>
      </div>
    </>
  );
};

export default Page;
