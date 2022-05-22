
import  React,{useContext} from "react"
import  ReactDOM  from "react-dom"
import ModalFormEdit from "./ModalFormEdit"
import ClasseModal from './Modal.module.css'
import MyContext from "../Store/MyContext"



const BackDrop = () =>{

    const ctx = useContext(MyContext)
    return(

        <div className={ClasseModal.backdrop} onClick={ctx.handleClose}> </div>
    )

}


const ModalEdit = () =>{

    return(
    
        <React.Fragment>
             {ReactDOM.createPortal(
                  <BackDrop></BackDrop>,
                  document.getElementById("backdrop")

              )}
              {ReactDOM.createPortal(
                  <ModalFormEdit></ModalFormEdit>,
                  document.getElementById("modalEdit")

              )}
        </React.Fragment>

  

    )
}

export default ModalEdit