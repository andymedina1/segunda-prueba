import Card from 'react-bootstrap/Card'

function ItemDetail ({ title, description, price, pictureUrl }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={pictureUrl} alt={'Imágen de ' + title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description} {price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ItemDetail
