import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

function ItemDetail ({ title, description, price, pictureUrl }) {
  const [cantidad, setCantidad] = useState(1)

  const handleIncrement = () => {
    setCantidad((prevCantidad) => prevCantidad + 1)
  }

  const handleDecrement = () => {
    if (cantidad > 1) {
      setCantidad((prevCantidad) => prevCantidad - 1)
    }
  }

  const handleReset = () => {
    setCantidad(1)
  }

  return (
    <div
      className='d-flex justify-content-center'
      style={{ width: '70%', margin: '2em auto' }}
    >
      <Card border='secondary'>
        <div className='d-flex'>
          <div>
            <Card.Img
              variant='top'
              src={pictureUrl}
              alt={'Imágen de ' + title}
            />
          </div>
          <div style={{ paddingLeft: '20px', borderLeft: '1px solid #757575' }}>
            <Card.Body
              style={{ height: '80%' }}
              className='d-flex flex-column justify-content-around text-center'
            >
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Title>{price}</Card.Title>
              <div className='d-flex justify-content-around align-items-center'>
                <div
                  className='d-flex flex-column align-items-center gap-2'
                  style={{ width: '25%' }}
                >
                  <Button
                    variant='secondary'
                    onClick={handleIncrement}
                    style={{ width: 50 }}
                  >
                    +
                  </Button>
                  <Button
                    variant='secondary'
                    onClick={handleDecrement}
                    style={{ width: 50 }}
                  >
                    -
                  </Button>
                </div>
                <h4>{cantidad}</h4>
                <Button
                  variant='secondary'
                  onClick={handleReset}
                  style={{ height: '70px', width: 100 }}
                >
                  Agregar al carrito
                </Button>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ItemDetail
