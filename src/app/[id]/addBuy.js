"use client"
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '@/redux/cartSlice';
const AddBuy = (props) => {
    const dispatch = useDispatch();
    console.log("props",props)

  return (
   <>
      <div className="flex gap-5">
            <button
              type="button"
              class="text-white bg-red-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={()=>dispatch(addItem({id:props.id,name:props.name,qty:1,price:props.price,img:props.img}))}
>
              Add Cart
            </button>

            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buy now
            </button>
          </div>
   </>
  )
}

export default AddBuy