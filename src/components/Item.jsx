import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'

function Item ({ id, title, description, price, pictureUrl }) {
  return (
    <NavLink to={'/item/' + id}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={pictureUrl} alt={'Imágen de ' + title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description} {price}
          </Card.Text>
        </Card.Body>
      </Card>
    </NavLink>
  )
}

export default Item
