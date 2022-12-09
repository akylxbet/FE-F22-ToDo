import React from 'react';
import { useState } from 'react';

const Addtodo = ({valueInputs,setValueInputs,array,setArray}) => {
  

    function deleteArray(id){
        const endArray = array.filter(todo => todo.id !== id)
        setArray(endArray)
    }
    function addToArray(){
        setArray([...array, {
            ...valueInputs,
            id:Date.now()
        }])
        console.log({
          ...valueInputs,
          id:Date.now()
        })
        setValueInputs({
          name:"",
          description:""
        })
    }

    return (
        <div>
            <h2>{valueInputs.name}</h2>
            <h3>{valueInputs.discription}</h3>
            <input type="text" placeholder='name' 
            value={valueInputs.name} 
            onChange={(e) => setValueInputs({...valueInputs, name:e.target.value})} />
            <input type="text" placeholder='disription' 
            value={valueInputs.discription}
            onChange={(e)=> setValueInputs({...valueInputs, discription:e.target.value})}/>
            <button onClick={addToArray}>Add todo</button>
            
            {
                array.map(todo => {
                    return (
                        <div>
                            <h1>{todo.name}</h1>
                            <h2>{todo.discription}</h2>
                            <button onClick={()=>deleteArray(todo.id)}>Delete</button>
                            
                        </div>
                    )
                })
            }

        </div>
    );
};

export default Addtodo