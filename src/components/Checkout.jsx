import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

import CheckoutForm from './CheckoutForm'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'

import db from '../services/firebase'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import EmptyCart from './EmptyCart'

function Checkout () {
  const [buyer, setBuyer] = useState(null)
  const [orderId, setOrderId] = useState(null)
  const [loading, setLoading] = useState(false)

  const { cartList, totalCartPrice, clear } = useContext(CartContext)

  const createOrder = (buyer, cartList, totalCartPrice) => {
    const order = {
      buyer,
      date: serverTimestamp(),
      items: cartList,
      total: totalCartPrice()
    }

    return order
  }

  const handleOrderData = ({ name, phoneNumber, email }) => {
    setBuyer({ name, phoneNumber, email })
  }

  useEffect(() => {
    if (buyer !== null) {
      setLoading(true)
      const order = createOrder(buyer, cartList, totalCartPrice)

      addDoc(collection(db, 'orders'), order)
        .then(docRef => {
          setOrderId(docRef.id)
          console.log('Documento con ID:', docRef.id)
        })
        .finally(() => {
          clear()
          setLoading(false)
        })
    }
  }, [buyer])

  if (cartList.length === 0) {
    return <EmptyCart />
  }

  if (orderId) {
    return (
      <>
        <h1 className='m-5 text-center'>Checkout</h1>
        <OrderConfirmation orderId={orderId} />
      </>
    )
  }

  return (
    <>
      <h1 className='m-5 text-center'>Checkout</h1>
      {loading
        ? <LoadingOrder />
        : <CheckoutForm onSubmit={handleOrderData} />}
    </>
  )
}

function LoadingOrder () {
  return (
    <h1 className='m-5 text-center'>Se está generando su orden...</h1>
  )
}

function OrderConfirmation ({ orderId }) {
  return (
    <>
      <h2 className='m-5 text-center'>Su ID de orden es: {orderId}</h2>
      <div className='d-flex justify-content-center'>
        <Link to='/'>
          <Button variant='secondary' style={{ height: '70px', width: 150 }}>
            Volver al inicio
          </Button>
        </Link>
      </div>
    </>
  )
}

export default Checkout
