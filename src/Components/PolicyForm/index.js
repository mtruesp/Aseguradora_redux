import React from 'react'
import {Container, Row, Button, Form} from 'react-bootstrap'
import {connect} from 'react-redux'

import {createPolicy} from '../../Action'

const PolicyForm = (props) => {

    const nameRef = React.createRef()
    const amountRef = React.createRef()

    const handlerCreate = () => {
        const policyObj = {
            name: nameRef.current.value,
            amount: amountRef.current.vale
        }
        props.createPolicy(policyObj.name, policyObj.amount)
    }

    return (
        <Container>
            <Row>
                Formulario de Polizas
            </Row>
            <Row>
                <Form.Group>
                    <Form.Control ref={nameRef} size="lg" type="text" placeholder="Nombre" />
                    <br />
                    <Form.Control ref={amountRef} size="lg" type="number" placeholder="Monto" />
                    <br />
                </Form.Group>
            </Row>
            <Row>
                <Button onClick={handlerCreate}>
                    Crear Poliza
                </Button>
                <Button>
                    Borrar Poliza
                </Button>
            </Row>

        </Container>
    )
}

export default connect(null, { createPolicy })(PolicyForm)