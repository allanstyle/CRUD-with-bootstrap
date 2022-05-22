import React ,{useContext,useRef} from 'react'
import Classes from './Modal.module.css';
import MyContext from '../Store/MyContext';



const ModalFormEdit = () => {

    const ctx = useContext(MyContext);
    const nameRef = useRef()
    const lastRef = useRef()
    const phoneRef = useRef()

    const handelModalEdit = () =>{

        const nameD = nameRef.current.value;
        const lastD = lastRef.current.value;
        const phoneD = phoneRef.current.value;

        const dataE = {

            id:ctx.numberID,
            name:nameD,
            last:lastD,
            phone:phoneD
        }
        
        ctx.fetchPut(ctx.numberID,dataE)

        ctx.setDataContact(prenvData =>{

            return prenvData.map(itemD =>{

                return itemD.id === ctx.numberID ? dataE: itemD
            })
        })

        ctx.setShowModal(null)
    }


  return (
    <div className={Classes.contenti}>
    <header className={Classes.title}>
        <h3>Edit Contact</h3>
    </header>
<form className={Classes.body}>
    {ctx.dataContact.filter(filterId =>filterId.id === ctx.numberID).map(
        (item)=> (
        <div key={item.id}>
            
            <div>
            <div>
                <label>
                    Name:
                </label>
            </div>
            <div>
                <input
                defaultValue={item.name}
                 name='name'
                 ref={nameRef}>
                </input>
            </div>
    
        </div>
    
        <div>
            <div>
                <label>
                    Last:
                </label>
            </div>
            <div>
                <input
                defaultValue={item.last}
                name='last'
                ref={lastRef}>
                </input>
            </div>
    
        </div>
    
        <div>
            <div>
                <label>
                    phone:
                </label>
            </div>
            <div>
                <input
                defaultValue={item.phone}
                 name='phone'
                 ref={phoneRef}>
                </input>
            </div>
    
        </div>
        
        </div>)
    )}
    {/* <div>
        <div>
            <label>
                Name:
            </label>
        </div>
        <div>
            <input
             name='name'
             ref={nameRef}>
            </input>
        </div>

    </div>

    <div>
        <div>
            <label>
                Last:
            </label>
        </div>
        <div>
            <input
            name='last'
            ref={lastRef}>
            </input>
        </div>

    </div>

    <div>
        <div>
            <label>
                phone:
            </label>
        </div>
        <div>
            <input
             name='phone'
             ref={phoneRef}>
            </input>
        </div>

    </div> */}

</form>

<footer className={Classes.footer}>
    <div>
        <button onClick={handelModalEdit}>Add Contact</button>
        <button onClick={ctx.handleClose}>Close</button>
    </div>
</footer>
</div>
  )
}

export default ModalFormEdit