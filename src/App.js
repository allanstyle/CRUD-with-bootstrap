import React,{useEffect, useContext,useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import FormAdd from './components/FormAdd'
import ListContact from './components/ListContat';
import MyContext from './Store/MyContext';
import ModalEdit from './components/ModalEdit';
import Search from './components/Search';

function App() {
  const ctx = useContext(MyContext)

  const fetchContat =useCallback(() =>{

   fetch(' http://localhost:3500/register')
    .then(response =>{
        return  response.json()
    }).then(data =>{
        //console.log("data1:",data)

        let transfer = data.map(key => {

          return {

            id:key.id,
            name:key.name,
            last:key.last,
            phone:key.phone

          }


        })

        ctx.setDataContact(transfer)
        console.log('data2:',transfer)
        
    })
  
  },[])

  useEffect(()=>{
    fetchContat()

  },[fetchContat])


  return (
    <div className="App">
      <div>
        {/* <ModalEdit></ModalEdit> */}
      </div>
      <header className="App-header">
        <h1>Crud Add Phone</h1>
      </header>
      <FormAdd></FormAdd>
      <Search></Search>
      <ListContact></ListContact>
    </div>
  )
}

export default App
