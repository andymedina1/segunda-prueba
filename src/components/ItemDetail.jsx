import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ItemCount from './ItemCount'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ItemDetail ({ item }) {
  const [cartValue, setCartValue] = useState(null)

  const navigate = useNavigate()

  const onAdd = (quantityToAdd) => {
    setCartValue(quantityToAdd)
  }

  const handleGoBack = () => {
    navigate(-1)
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
              className='d-flex flex-column justify-content-around align-items-center text-center'
            >
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Title>{item.price}</Card.Title>

              {!cartValue ? <ItemCount onAdd={onAdd} /> : <Success />}

              <div className='mt-5 d-flex gap-5'>
                <Button
                  variant='secondary'
                  style={{ height: '70px', width: 100 }}
                  onClick={handleGoBack}
                >
                  Volver
                </Button>
                <Link to='/cart'>
                  <Button
                    variant='secondary'
                    style={{ height: '70px', width: 150 }}
                  >
                    Terminar mi compra
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  )
}

function Success () {
  return (
    <Card bg='success' text='white' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>Producto agregado al carrito!</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ItemDetail
