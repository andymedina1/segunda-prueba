import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function EmptyCart () {
  return (
    <>
      <main>
        <section className='m-5'>
          <h2>Shopping Cart</h2>
          <hr />
          <div
            style={{
              margin: '1em 0',
              textAlign: 'center'
            }}
          >
            <img
              src='https://gist.github.com/assets/107598069/039068a0-f582-40fe-82bd-3e1c9021d0cd'
              alt='Imágen carrito vacío'
              style={{ width: 250 }}
            />
            <p
              style={{
                fontSize: '1.2em',
                fontFamily: 'sans-serif',
                fontWeight: '600'
              }}
            >
              Tu carrito está vacío
            </p>
          </div>
          <div className='text-center'>
            <Link to='/'>
              <Button variant='secondary' size='lg'>
                Volver
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}

export default EmptyCart
