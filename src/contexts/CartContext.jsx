import { createContext, useState } from 'react'

export const CartContext = createContext({
  cartList: [],
  addItem: () => {},
  clear: () => {},
  removeItem: () => {},
  totalCartQuantity: () => {}
})

function CartContextProvider ({ children }) {
  const [cartList, setCartList] = useState([])

  const addItem = (item, quantity) => {
    setCartList((prevCartList) => {
      const isInCart = prevCartList.some((cartItem) => cartItem.id === item.id)

      if (!isInCart) {
        return [...prevCartList, { ...item, quantity }]
      } else {
        const newCartList = prevCartList.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
        return newCartList
      }
    })
  }

  const clear = () => setCartList([])

  const removeItem = (id) => {
    setCartList((prevCartList) =>
      prevCartList.filter((item) => item.id !== id)
    )
  }

  const totalCartQuantity = () => cartList.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cartList, addItem, clear, removeItem, totalCartQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
