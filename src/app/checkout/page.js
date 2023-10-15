// pages/checkout.js
"use client"
import Link from 'next/link';
import { useSelector } from 'react-redux';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>

      <div className="max-w-md w-full bg-white p-4 rounded-md shadow-md">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b py-2">
            <div className="flex items-center space-x-4">
              <img
                src={item.image} // Replace with the actual image source
                alt={item.name}
                className="w-12 h-12 rounded"
              />
              <div>
                <p className="text-gray-800 font-bold">{item.name}</p>
                <p className="text-gray-500">Qty: {item.qty}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-gray-800 font-bold">${item.price}</p>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-700 font-bold">Total:</p>
          <p className="text-gray-800 font-bold">
            ${cartItems.reduce((total, item) => total + item.price * item.qty, 0)}
          </p>
        </div>
            <Link href="/placed">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4">
          Place Order
        </button></Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
