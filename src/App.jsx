import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import CartContextProvider from './contexts/CartContext'
import Cart from './components/Cart'

import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCkDjdfEITuwjXXyNFuNKgRLvNy2eMFLzc',
  authDomain: 'proyecto-react-coderhous-7fb9a.firebaseapp.com',
  projectId: 'proyecto-react-coderhous-7fb9a',
  storageBucket: 'proyecto-react-coderhous-7fb9a.appspot.com',
  messagingSenderId: '866949862759',
  appId: '1:866949862759:web:8eebe0b4299dac2b0ecbc2'
}

export const app = initializeApp(firebaseConfig)

function App () {
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
