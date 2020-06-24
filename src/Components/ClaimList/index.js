import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {connect} from 'react-redux'

const ClaimList = (props) => {
    return (
        <Container>
            {
                props.claimList.map((claim) => {
                    return (
                        <Row>
                            <Col>
                                {
                                    claim.name
                                }
                            </Col>
                            <Col>
                                {
                                    claim.amount
                                }
                            </Col>
                            <Col>
                                Reclamo
                            </Col>
                        </Row>
                    )
                })
            }
        </Container>
    )
}

const mapStateToProps = (state) => {
    return  {
        claimList: state.claimsList
    }
}

export default connect(mapStateToProps)(ClaimList)

