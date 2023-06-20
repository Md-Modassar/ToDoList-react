//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ToDolist from './ToDolist';

function App() {
  const [inputlist,setInputlist]=useState("")
   const [items,setItems]=useState([])
  const itemEvent=(event)=>{
     setInputlist(event.target.value)
  }

  const listofItem=()=>{
      setItems((olditem)=>{
        return [...olditem,inputlist]
      });
      setInputlist("")
  }
  const deleteItem=(id)=>{
    setItems((olditem)=>{
      return olditem.filter((arrele,index)=>{
        return index !==id 
      })
    })
}
  return (
    <div className="main_div"> 
      <div className="center_div">

             <br/>
             <h1>TODO List</h1>
             <br/>

             <input type="text" placeholder="Add a Items" value={inputlist} onChange={itemEvent}/>
             <button onClick={listofItem}>+</button>
             <ol>
              {/* <li>{inputlist}</li> */}
               {
                items.map((itemval,index)=>{
                 return <ToDolist key={index} id={index} text={itemval} onSelect={deleteItem}/>
                })
               }
             </ol>
      </div>
     
    </div>
  );
}

export default App;
