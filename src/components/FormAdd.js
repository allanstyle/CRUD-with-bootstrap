import React, { useRef, useContext } from 'react';
import MyContext from '../Store/MyContext'
import { Button, Form, Container, Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function FormAdd() {

    const ctx = useContext(MyContext)

    const nameRef = useRef()
    const lastRef = useRef()
    const phoneRef = useRef()


    // const fetchPot = async (data) => {

    //     const response = await fetch("http://localhost:3500/register", {
    //         method: "POST",
    //         body: JSON.stringify(data),
    //         headers: { 'content-type': 'application/json' }

    //     });
    //     const dataRegister = await response.json()
    //     return dataRegister;

    // }

    const handleAdd = (event) => {
        event.preventDefault();

        const nameD = nameRef.current.value;
        const lastD = lastRef.current.value;
        const phoneD = phoneRef.current.value;

        const data = {

            name: nameD,
            last: lastD,
            phone: phoneD
        };

        ctx.fetchPot(data).then(response => {

            ctx.setDataContact(prevState => [...prevState, {
                id: response.id,
                name: response.name,
                last: response.last,
                phone: response.phone
            }])

        })

        nameRef.current.value = "";
        lastRef.current.value = "";
        phoneRef.current.value = "";

    }



    return (
        <div>
            <form onSubmit={handleAdd}>
                <div>
                    <div>
                        <label htmlFor='name'>
                            Name:
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name='name'
                            ref={nameRef}>
                        </input>
                    </div>

                </div>

                <div>
                    <div>
                        <label htmlFor='last'>
                            Last:
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name='last'
                            ref={lastRef}>
                        </input>
                    </div>

                </div>

                <div>
                    <div>
                        <label htmlFor='phone'>
                            phone:
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            name='phone'
                            ref={phoneRef}>
                        </input>
                    </div>

                </div>

                <div>
                    <button>Add Contact</button>
                </div>
            </form>

            {/* <div>
                <Container>
                    <Row>

                        <Col lg="6">
                        <Col md="auto" >
                        <Col lg="6">
                    <Form>
                        <Form.Group className="mb-2" controlId="formBasicEmail" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                    </Col>
                    </Col>
                    </Row>
                </Container>
            </div> */}
        </div>
    )
}

export default FormAdd