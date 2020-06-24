import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {deletePolicy} from '../../Action'

const NamesList = (props) => {
    const { listOfNames } = props
    
    const handleDelete = (name) => {
        props.deletePolicy(name)
    }

    return(
        <Container>
            {
                listOfNames.map((policy) => {
                    return (
                        <Row>
                            <Col>
                                {policy.name}
                            </Col>
                            <Col>
                                {policy.amount}
                            </Col>
                            <Col>
                                <Button onClick={() => handleDelete(policy.name)}>
                                    Borrar
                                </Button>
                            </Col>
                        </Row>
                    )
                })
            }
        </Container>
    )
}

const stateAProps = (state) => { //mapStateToProps nombre común para esta función
    return {
        listOfNames: state.namesList
    }
}

export default connect(stateAProps, {deletePolicy})(NamesList)