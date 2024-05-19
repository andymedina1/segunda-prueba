import { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

function ItemCount ({ onAdd, stock }) {
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1)
    }
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1)
    }
  }

  return (
    <>
      <div
        style={{ width: '100%' }}
        className='d-flex justify-content-around align-items-center'
      >
        <div
          className='d-flex flex-column align-items-center gap-2'
          style={{ width: '25%' }}
        >
          <Button
            variant='secondary'
            onClick={handleIncrement}
            style={{ width: 50 }}
            disabled={quantity === stock}
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
        <h4>{quantity}</h4>
        <Button
          variant='secondary'
          onClick={() => onAdd(quantity)}
          style={{ height: '70px', width: 100 }}
        >
          Agregar al carrito
        </Button>
      </div>
      <Card.Title>Stock: {stock}</Card.Title>
    </>
  )
}

export default ItemCount
