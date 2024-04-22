import { createContext, useState } from 'react'

const CartContext = createContext({ cartList: [] })

function CartContextProvider ({ children }) {
  const [cartList, setCartList] = useState([])

  const addToCart = (item, quantity) => {
    setCartList(prevCartList => [...prevCartList, { ...item, quantity }])
  }

  const clear = () => setCartList([])

  const deleteItem = (id) => {
    setCartList(prevCartList => prevCartList.filter(item => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cartList, addToCart, clear, deleteItem }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
