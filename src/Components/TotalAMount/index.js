import React from 'react'
import { Row, Container, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

const TotalAmount = (props) => {

    return(
        <Container>
            <Row>
                <Col sm="4">
                    Total:
                </Col>
                <Col sm="4">
                    {
                        props.total
                    }
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        total: state.totalAmount
    }
}

export default connect(mapStateToProps)(TotalAmount)