import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#">
            <h2>React Store</h2>
          </Navbar.Brand>
          <CartWidget />
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
