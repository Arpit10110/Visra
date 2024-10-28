'use client';
import { createAction, createReducer } from "@reduxjs/toolkit";
import { useEffect } from "react";

const addtocart = createAction('addtocart');

const initialCart = typeof window !== 'undefined' && localStorage.getItem("Visracart")
    ? JSON.parse(localStorage.getItem("Visracart"))
    : [];

export const Visrareducer = createReducer( {
   cart: initialCart 
  },
  (builder) => {
    builder.addCase(addtocart, (state, action) => {
      const item = action.payload;
      state.cart = [item]; // Overwrites the cart with the new item
    });
  }
);

// Save to localStorage on cart change (client-only)
export const usePersistCart = (cart) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("Visracart", JSON.stringify(cart));
    }
  }, [cart]);
};
