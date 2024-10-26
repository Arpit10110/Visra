'use client'
import Navbar from '@/Components/Navbar/Navbar'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import CheckoutUpperCard from '@/Components/CheckoutUpperCard/CheckoutUpperCard'
import IndidvidualForm from '@/Components/IndidvidualForm/IndidvidualForm'
import OrganizationForm from '@/Components/OrganizationForm/OrganizationForm'
const page = () => {
    const [ShowindividualForm,SetShowindividualForm] =useState(true);
    const { cart } = useSelector(state => state.Visra);
    useEffect(() => {
      console.log(cart[0])
      if (cart && cart[0]) {
        if (cart[0].profile === "Individual" || cart[0].profile === "Foreign_Individual") {
          SetShowindividualForm(true);
        } else {
          SetShowindividualForm(false);
        }
      }
    }, []);
  return (
   <>
   <Navbar/>
   <div>
        <CheckoutUpperCard profile={cart[0].profile} assistance={cart[0].assistance} classify={cart[0].classify} token={cart[0].token} years={cart[0].years} />
            {
              ShowindividualForm === true ? <IndidvidualForm cart={cart[0].price} /> : <OrganizationForm />
            }
   </div>
   </>
  )
}

export default page
