import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

function Cart () {
  const { cartList } = useContext(CartContext)
  return (
    <div className='mt-5 ms-5'>
      <h1>Prueba carrito</h1>
      <div className='mt-5'>
        {cartList.map(item =>
          <ul key={item.id}>
            <h6>{item.title}</h6>
            <li>Precio unitario: {item.price}</li>
            <li>Cantidad: {item.quantity} unidades</li>
          </ul>)}
      </div>
    </div>
  )
}

export default Cart
