import React from 'react'
import {Container, Row, Button, Form} from 'react-bootstrap'



const ClaimForm = () => {

    return (
        <Container>
            <Row>
                Formulario de reclamos
            </Row>
            <Row>
                <Form.Group>
                    <Form.Control size="lg" type="text" placeholder="Nombre" />
                    <br />
                    <Form.Control size="lg" type="number" placeholder="Monto" />
                    <br />
                </Form.Group>
            </Row>
            <Row>
                <Button>
                    Crear Reclamo
                </Button>
            </Row>

        </Container>
    )
}

export default ClaimForm