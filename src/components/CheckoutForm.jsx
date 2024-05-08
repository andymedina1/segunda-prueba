import { useState } from 'react'
import { Button, Container, Form, Tooltip, OverlayTrigger } from 'react-bootstrap'

function CheckoutForm ({ onSubmit }) {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEmail] = useState('')
  const [error, setError] = useState(false)

  const handlePhoneChange = (event) => {
    const value = event.target.value
    const cleaned = value.replace(/[^0-9]/g, '')
    if (cleaned.length <= 10) {
      setPhoneNumber(cleaned)
    }
  }

  const handleNameChange = (event) => {
    const value = event.target.value
    const cleaned = value.replace(/[0-9]/g, '')
    setName(cleaned)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    if (confirmEmail) {
      setError(event.target.value !== confirmEmail)
    }
  }

  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value)
    if (email) {
      setError(event.target.value !== email)
    }
  }

  const formIsValid = name && phoneNumber && email && confirmEmail && (email === confirmEmail)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ name, phoneNumber, email })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>Nombre y apellido</Form.Label>
          <Form.Control
            type='text'
            placeholder='Juan Pérez'
            value={name}
            onChange={handleNameChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formPhone'>
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type='text'
            placeholder='1126554433'
            value={phoneNumber}
            onChange={handlePhoneChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='juanc@mail.com'
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formConfirmEmail'>
          <Form.Label>Confirmar Email</Form.Label>
          <OverlayTrigger
            placement='top'
            show={error}
            overlay={
              <Tooltip id='button-tooltip'>
                Los emails no coinciden.
              </Tooltip>
            }
          >
            <Form.Control
              type='email'
              placeholder='juanc@mail.com'
              value={confirmEmail}
              onChange={handleConfirmEmailChange}
              isInvalid={error}
              required
            />
          </OverlayTrigger>
        </Form.Group>

        <Button variant='secondary' type='submit' disabled={!formIsValid}>
          Realizar compra
        </Button>
      </Form>
    </Container>
  )
}

export default CheckoutForm
