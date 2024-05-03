import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Cart () {
  const { cartList, totalCartPrice } = useContext(CartContext)

  if (cartList.length === 0) {
    return <EmptyCart />
  }

  return (
    <main className='d-flex'>
      <section className='m-5' style={{ width: '60%' }}>
        <h2>Shopping Cart</h2>
        <hr />
        <div className='d-flex justify-content-around align-items-center'>
          <div className='px-2 text-center' style={{ width: '10%' }}>
            Remove
          </div>
          <div className='px-2 text-center' style={{ width: '40%' }}>
            Product
          </div>
          <div className='px-2 text-center' style={{ width: '15%' }}>
            Price
          </div>
          <div className='px-2 text-center' style={{ width: '15%' }}>
            Quantity
          </div>
          <div className='px-2 text-center' style={{ width: '20%' }}>
            Subtotal
          </div>
        </div>
        <hr />
        <div>
          {cartList.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </section>
      <aside className='m-5 px-3' style={{ width: '40%' }}>
        <h2>Cart Totals</h2>
        <hr />
        <section className='d-flex justify-content-between'>
          <span>SubTotal</span>
          <span>${totalCartPrice()}</span>
        </section>
        <hr />
        <section className='d-flex justify-content-between'>
          <span>Shipping</span>
        </section>
        <hr />
        <section className='d-flex justify-content-between'>
          <span>Total</span>
          <span>${totalCartPrice()}</span>
        </section>
        <hr />
        <Link to='/checkout'>
          <Button variant='secondary' size='lg' style={{ width: '100%' }}>
            Proceed to Checkout
          </Button>
        </Link>
      </aside>
    </main>
  )
}

function EmptyCart () {
  return (
    <>
      <main>
        <section className='m-5'>
          <h2>Shopping Cart</h2>
          <hr />
          <div
            style={{
              margin: '1em 0',
              textAlign: 'center'
            }}
          >
            <img
              src='https://gist.github.com/assets/107598069/039068a0-f582-40fe-82bd-3e1c9021d0cd'
              alt='Imágen carrito vacío'
              style={{ width: 250 }}
            />
            <p
              style={{
                fontSize: '1.2em',
                fontFamily: 'sans-serif',
                fontWeight: '600'
              }}
            >
              Tu carrito está vacío
            </p>
          </div>
          <div className='text-center'>
            <Link to='/'>
              <Button variant='secondary' size='lg'>
                Volver
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

function CartItem ({ item }) {
  const { removeItem } = useContext(CartContext)

  return (
    <div className='d-flex justify-content-between align-items-center my-3'>
      <div className='px-2 text-center' style={{ width: '10%' }}>
        <Button variant='danger' onClick={() => removeItem(item.id)}>
          X
        </Button>
      </div>
      <div className='d-flex px-2' style={{ width: '40%' }}>
        {' '}
        <div className='d-flex justify-content-center' style={{ width: '50%' }}>
          <img
            src={item.pictureUrl}
            alt={item.title}
            style={{ width: '100px', height: 'auto' }}
          />
        </div>
        <div
          style={{ width: '50%' }}
          className='d-flex text-center align-items-center'
        >
          <h6>{item.title}</h6>
        </div>
      </div>
      <div className='px-2 text-center' style={{ width: '15%' }}>
        <h6>${item.price}</h6>
      </div>
      <div className='px-2 text-center' style={{ width: '15%' }}>
        <h6>{item.quantity}</h6>
      </div>
      <div className='px-2 text-center' style={{ width: '20%' }}>
        <h6>${item.price * item.quantity}</h6>
      </div>
    </div>
  )
}

export default Cart
