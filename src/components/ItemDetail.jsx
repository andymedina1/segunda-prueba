import { useState } from 'react'

import Card from 'react-bootstrap/Card'
import ItemCount from './ItemCount'

function ItemDetail ({ item }) {
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
              src={item.pictureUrl}
              alt={'Imágen de ' + item.title}
            />
          </div>
          <div style={{ paddingLeft: '20px', borderLeft: '1px solid #757575' }}>
            <Card.Body
              style={{ height: '80%' }}
              className='d-flex flex-column justify-content-around text-center'
            >
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Title>{item.price}</Card.Title>
              <ItemCount
                cantidad={cantidad}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleReset={handleReset}
              />
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ItemDetail
