'use client'
import Navbar from '@/Components/Navbar/Navbar'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import CheckoutUpperCard from '@/Components/CheckoutUpperCard/CheckoutUpperCard'
const page = () => {
    const [individualForm,SetindividualForm] =useState();
    const [OraganizationForm,SetOraganizationForm] =useState();
    const { cart } = useSelector(state => state.Visra);
    console.log(cart);
  return (
   <>
   <Navbar/>
   <div>
        <CheckoutUpperCard profile={cart[0].profile} assistance={cart[0].assistance} classify={cart[0].classify} token={cart[0].token} years={cart[0].years} />
   </div>
   </>
  )
}

export default page
