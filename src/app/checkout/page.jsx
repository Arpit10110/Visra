'use client';
import Navbar from '@/Components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CheckoutUpperCard from '@/Components/CheckoutUpperCard/CheckoutUpperCard';
import IndidvidualForm from '@/Components/IndidvidualForm/IndidvidualForm';
import OrganizationForm from '@/Components/OrganizationForm/OrganizationForm';
import { usePersistCart } from '@/Store/Reducer';
import Script from 'next/script';
const Page = () => {
  const [showIndividualForm, setShowIndividualForm] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const { cart } = useSelector(state => state.Visra);
  usePersistCart(cart);

  useEffect(() => {
    setIsMounted(true); // Component is now mounted on client side
  }, []);

  useEffect(() => {
    if (cart && cart[0]) {
      setShowIndividualForm(
        cart[0].profile === "Individual" || cart[0].profile === "Foreign_Individual"
      );
    }
  }, [cart]);

  if (!isMounted) return null; // Prevent rendering until client-side mount

  return (
    <>
      <Navbar />
      <div>
    <Script src="https://checkout.razorpay.com/v1/checkout.js"  />
        {cart && cart[0] && (
          <>
            <CheckoutUpperCard 
              profile={cart[0].profile} 
              assistance={cart[0].assistance} 
              classify={cart[0].classify} 
              token={cart[0].token} 
              years={cart[0].years} 
            />
            {showIndividualForm ? (
              <IndidvidualForm fullcart={cart} cart={cart[0].price} />
            ) : (
              <OrganizationForm cart={cart[0].price} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Page;
