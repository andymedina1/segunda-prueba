import Button from 'react-bootstrap/Button'

function ItemCount ({
  cantidad,
  handleIncrement,
  handleDecrement,
  handleReset
}) {
  return (
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
  )
}

export default ItemCount
