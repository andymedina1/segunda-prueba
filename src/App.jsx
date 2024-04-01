import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

function App () {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />
    </>
  )
}

export default App
