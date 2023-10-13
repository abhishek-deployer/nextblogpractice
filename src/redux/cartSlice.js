// store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { id, name, qty,price ,img} = action.payload;
      console.log("cart item,id,name", id, name,qty,price);
      // Check if the item with the same ID already exists
      const existingItem = state.items.find((item) => item.id === id);

      // If the item exists, update its quantity
      if (existingItem) {
        existingItem.qty += qty;
      } else {
        // If the item doesn't exist, add it to the items list
        state.items.push({ id, name, qty,price,img });
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    increaseQty:(state,action)=>{
      const id = action.payload;
      console.log("increasesqty ",id)
      const existingItem = state.items.find((item) => item.id === id);

      // If the item exists, update its quantity
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        // If the item doesn't exist, add it to the items list
        state.items.push({ name });
      }


    },
    decreaseQty:(state,action)=>{
      const id = action.payload;
      console.log("increasesqty ",id)
      const existingItem = state.items.find((item) => item.id === id);

      // If the item exists, update its quantity
      if (existingItem) {
        if(existingItem.qty>1)
        {
          existingItem.qty -= 1;
        }
      } else {
        // If the item doesn't exist, add it to the items list
        state.items.push({ id });
      }


    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart,increaseQty,decreaseQty } = cartSlice.actions;

export default cartSlice.reducer;
