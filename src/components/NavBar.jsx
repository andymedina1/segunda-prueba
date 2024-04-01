import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

function NavBar () {
  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <div className='container d-flex justify-content-between align-items-center'>
          <Navbar.Brand href='#' className='me-0'>
            <NavLink to='/'><h2>React Store</h2></NavLink>
          </Navbar.Brand>

          <div className='navbar_link-container'>
            <NavLink to='/category/notebooks'><h5>Notebooks</h5></NavLink>
            <NavLink to='/category/telefonos'><h5>Teléfonos</h5></NavLink>
          </div>

          <CartWidget />
        </div>
      </Navbar>
    </>
  )
}

export default NavBar
