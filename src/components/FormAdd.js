import React, { useRef, useContext } from 'react';
import MyContext from '../Store/MyContext'
import { Button, Form, Container, Row,Col } from 'react-git';
import 'bootstrap/dist/css/bootstrap.min.css'

function FormAdd() {

    const ctx = useContext(MyContext)

    const nameRef = useRef()
    const lastRef = useRef()
    const phoneRef = useRef()


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

        </div>
    )
}

export default FormAdd