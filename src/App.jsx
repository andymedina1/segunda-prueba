import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <h1>Hola Mundo!</h1>
      <NavBar />
      <ItemListContainer greeting={'Bienvenido!'}/>
    </>
  )
}

export default App
