import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <div className="container d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#" className="me-0">
            <h2>React Store</h2>
          </Navbar.Brand>

          <div className="navbar_link-container">
            <a href="#">
              <h5>Notebooks</h5>
            </a>
            <a href="#">
              <h5>Teléfonos</h5>
            </a>
            <a href="#">
              <h5>Componentes</h5>
            </a>
          </div>

          <CartWidget />
        </div>
      </Navbar>
    </>
  );
}

export default NavBar;
