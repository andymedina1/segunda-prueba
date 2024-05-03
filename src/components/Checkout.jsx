import { serverTimestamp } from 'firebase/firestore'

import CheckoutForm from './CheckoutForm'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

function Checkout () {
  const { cartList, totalCartPrice } = useContext(CartContext)

  const createOrder = (name, phone, email, cartList, totalCartPrice) => {
    const order = {
      buyer: {
        name,
        email,
        phone
      },
      date: serverTimestamp(),
      items: cartList,
      total: totalCartPrice()
    }

    return order
  }

  const handleOrderData = ({ name, phoneNumber, email }) => {
    console.log(createOrder(name, phoneNumber, email, cartList, totalCartPrice))
  }

  return (
    <>
      <h1>Checkout</h1>
      <CheckoutForm onSubmit={handleOrderData} />
    </>
  )
}

export default Checkout
