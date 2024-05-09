import Navbar from 'react-bootstrap/Navbar'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

function NavBar () {
  const activeStyle = {
    backgroundColor: 'white',
    borderRadius: '10%',
    color: '#212529',
    padding: '0.5em'
  }

  const inactiveStyle = {
    color: 'white',
    padding: '0.5em'
  }

  return (
    <>
      <Navbar bg='dark' data-bs-theme='dark'>
        <div className='container d-flex justify-content-between align-items-center'>
          <NavLink className='me-0 navbar-brand' to='/'>
            <h2>React Store</h2>
          </NavLink>

          <div
            className='d-flex gap-4'
            style={{ marginLeft: '-8%' }}
          >
            <NavLink
              to='/category/notebooks'
              style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            >
              <h5 style={{ margin: 0 }}>Notebooks</h5>
            </NavLink>
            <NavLink
              to='/category/telefonos'
              style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            >
              <h5>Teléfonos</h5>
            </NavLink>
          </div>

          <CartWidget />
        </div>
      </Navbar>
    </>
  )
}

export default NavBar
