
import React, { useContext } from "react";
import MyContext from '../Store/MyContext'
import ModalEdit from "./ModalEdit";
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'



const ListContact = () => {
    const ctx = useContext(MyContext)

    const handleDelectFiel = (id) => {
        console.log("number id", id)
        ctx.handleDelect(id);

        ctx.setDataContact(delect => delect.filter(register => register.id !== id))

    }
    // console.log("prueba")

    const handlebuttonEdit = (id) => {
        console.log('click')
        ctx.setShowModal(!ctx.showModal)
        ctx.setNumberId(id)



    }
      let count = 1
    return (
        <div>
            {ctx.showModal && <ModalEdit></ModalEdit>}
            {/* <ul>
                {ctx.dataContact.map((item) => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.last}</p>
                        <p>{item.phone}</p>
                        <button onClick={() => handlebuttonEdit(item.id)}>Edit</button>
                        <button onClick={() => handleDelectFiel(item.id)}>Delete</button>
                    </li>


                ))}
            </ul> */}

            <Table striped bordered hover size="sm" responsive="sm" className="mb-3">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Edit/delect</th>
                    </tr>
                </thead>
                {ctx.dataContact.map((item) => (

                    <tbody key={item.id}>
                        <tr>
                            <td>{count++}</td>
                            <td>{item.name}</td>
                            <td>{item.last}</td>
                            <td>{item.phone}</td>
                            <td>
                            <button onClick={() => handlebuttonEdit(item.id)}>Edit</button>
                            <button onClick={() => handleDelectFiel(item.id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                ))}

            </Table>
        </div>
    )
}

export default ListContact