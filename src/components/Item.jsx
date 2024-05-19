import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'

function Item ({ id, title, description, price, pictureUrl, stock }) {
  return (
    <NavLink to={'/item/' + id}>
      <Card border='secondary' style={{ width: '18rem', height: 500 }}>
        <div style={{ height: '280px' }}>
          <Card.Img variant='top' src={pictureUrl} alt={'Imágen de ' + title} />
        </div>
        <div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Title className='text-center'>${price}</Card.Title>
            <Card.Text className='text-center'>Stock: {stock}</Card.Text>
          </Card.Body>
        </div>
      </Card>
    </NavLink>
  )
}

export default Item
