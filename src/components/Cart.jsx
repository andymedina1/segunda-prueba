import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EmptyCart from './EmptyCart'

function Cart () {
  const { cartList, totalCartPrice } = useContext(CartContext)

  if (cartList.length === 0) {
    return <EmptyCart />
  }

  return (
    <main className='d-flex'>
      <section className='m-5' style={{ width: '60%' }}>
        <h2>Carrito de Compras</h2>
        <hr />
        <div className='d-flex justify-content-around align-items-center'>
          <div className='px-2 text-center' style={{ width: '10%' }}>
            Eliminar
          </div>
          <div className='px-2 text-center' style={{ width: '40%' }}>
            Productos
          </div>
          <div className='px-2 text-center' style={{ width: '15%' }}>
            Precio
          </div>
          <div className='px-2 text-center' style={{ width: '15%' }}>
            Cantidad
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
        <h2>Resumen del Carrito</h2>
        <hr />
        <section className='d-flex justify-content-between'>
          <span>SubTotal</span>
          <span>${totalCartPrice()}</span>
        </section>
        <hr />
        <section className='d-flex justify-content-between'>
          <span>Envío</span>
          <span>¡Envío gratis!</span>
        </section>
        <hr />
        <section className='d-flex justify-content-between'>
          <span>Total</span>
          <span>${totalCartPrice()}</span>
        </section>
        <hr />
        <Link to='/checkout'>
          <Button variant='secondary' size='lg' style={{ width: '100%' }}>
            Finalizar Compra
          </Button>
        </Link>
      </aside>
    </main>
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
