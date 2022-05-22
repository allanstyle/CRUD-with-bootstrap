import React,{useState,useContext, useEffect} from "react";
import MyContext from "../Store/MyContext";


const Search = () =>{
const [searchField,setSearchField]=useState("")

const ctx = useContext(MyContext)

// const handleSearch = ()=>{

//     const query =`?q=${searchField}`;

//     ctx.fetchSearch(query).then(data =>{

//         console.log('search:',data)
//     })

// }

useEffect(()=>{

    const query =`?q=${searchField}`;

    ctx.fetchSearch(query).then(data =>{

        console.log('search:',data)
        const dataSearch = data.map((item)=>{

            return {

                id:item.id,
                name:item.name,
                last:item.last,
                phone:item.phone


            }
        })
        
        ctx.setDataContact(dataSearch)

    })

    

},[searchField,ctx.setDataContact])




return(

    <div>
        <div>
           <label>
               Search
          </label> 
       </div>
       <div>
           <input
           name="Search"
           value={searchField}
           onChange={(event) => setSearchField(event.target.value)}
           >

           </input>
       </div>
    </div>
)

}

export default Search 