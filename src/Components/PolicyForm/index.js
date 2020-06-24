import React from 'react'
import {Container, Row, Button, Form, Col} from 'react-bootstrap'
import {connect} from 'react-redux'

import {createPolicy, deletePolicy} from '../../Action'

const PolicyForm = (props) => {

    const nameRef = React.createRef()
    const amountRef = React.createRef()

    const handlerCreate = () => {
        const policyObj = {
            name: nameRef.current.value,
            amount: parseInt(amountRef.current.value)
        }
        props.createPolicy(policyObj.name, policyObj.amount)
    }

    const handleDelete = () => {
        const name = nameRef.current.value
        props.deletePolicy(name)
    }

    return (
        <Container>
            <h1>{props.insuranceName}</h1>
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
                <Col>
                    <Button onClick={handlerCreate}>
                        Crear Poliza
                    </Button>
                </Col>
                <Col>
                    <Button onClick={handleDelete}>
                        Borrar Poliza
                    </Button>
                </Col>
            </Row>

        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        insuranceName: state.insuranceName
    }
}

export default connect(mapStateToProps, { createPolicy, deletePolicy })(PolicyForm)