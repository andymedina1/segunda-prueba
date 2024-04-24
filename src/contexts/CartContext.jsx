import { createContext, useState } from 'react'

export const CartContext = createContext({
  cartList: [],
  addItem: () => {},
  clear: () => {},
  removeItem: () => {},
  isInCart: () => {}
})

function CartContextProvider ({ children }) {
  const [cartList, setCartList] = useState([])

  const addItem = (item, quantity) => {
    setCartList((prevCartList) => [...prevCartList, { ...item, quantity }])
  }

  const clear = () => setCartList([])

  const removeItem = (id) => {
    setCartList((prevCartList) =>
      prevCartList.filter((item) => item.id !== id)
    )
  }

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id)
  }

  return (
    <CartContext.Provider
      value={{ cartList, addItem, clear, removeItem, isInCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
