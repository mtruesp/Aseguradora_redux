import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'

import Menu from '../Menu'
import PolicyForm from '../PolicyForm'
import ClaimForm from '../ClaimForm'
import NamesList from '../NamesList'
import TotalAmount from '../TotalAMount'
import ClaimList from '../ClaimList'

const App = () => {
 
    return(
        <Container>
            <BrowserRouter>
                <Row>
                    <Menu/>
                </Row>
                <Row>
                    <Col>
                        <Route path="/" exact component={PolicyForm}></Route>
                        <Route path="/claim" component={ClaimForm}></Route>
                    </Col>
                    <Col>
                        <Row>
                            <NamesList/>
                        </Row>
                        <Row>
                            <ClaimList/>
                        </Row>
                        <Row>
                            <TotalAmount/>
                        </Row>
                    </Col>
                </Row>
            </BrowserRouter>
        </Container>
    )
}

export default App