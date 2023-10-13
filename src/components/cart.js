// components/Cart.js
"use client"
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart,increaseQty,decreaseQty } from '@/redux/cartSlice';
import Link from 'next/link';
function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartitems",cartItems)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Shopping Cart</h2>
      {
        cartItems.length>0 ?(
          <div className="max-w-md w-full bg-white p-4 rounded-md shadow-md">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-2">
              <div className="flex items-center space-x-4">
                <img
                  src={item.img} // Replace with the actual image source
                  alt={item.name}
                  className="w-12 h-12 rounded"
                />
                <div>
                  <p className="text-gray-800 font-bold">{item.name}</p>
                </div>
                <div className="flex items-center space-x-2">
            <button
              onClick={() => dispatch(decreaseQty(item.id))}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-400 focus:outline-none"
            >
              -
            </button>
            <p className="text-gray-500">{item.qty}</p>
            <button
              onClick={() => dispatch(increaseQty(item.id))}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-400 focus:outline-none"
            >
              +
            </button>
          </div>
              </div>
              <div className="text-right">
                <p className="text-gray-800 font-bold">${item.price*item.qty}</p>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="text-red-500 hover:underline focus:outline-none"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className="flex items-center justify-between mt-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="text-red-500 hover:underline focus:outline-none"
            >
              Clear Cart
            </button>
            <Link href="/checkout">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Checkout
            </button></Link>
          </div>
        </div>
        ):
        <h1 className="text-3xl font-bold mb-4">
          Currently No items in the cart
        </h1>
      }
     
    </div>
  );
}

export default Cart;
