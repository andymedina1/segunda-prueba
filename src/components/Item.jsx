import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'

function Item ({ id, title, description, price, pictureUrl }) {
  return (
    <NavLink to={'/item/' + id}>
      <Card border='secondary' style={{ width: '18rem', height: 480 }}>
        <div style={{ height: '280px' }}>
          <Card.Img variant='top' src={pictureUrl} alt={'Imágen de ' + title} />
        </div>
        <div>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Title className='text-center'>{price}</Card.Title>
          </Card.Body>
        </div>
      </Card>
    </NavLink>
  )
}

export default Item
