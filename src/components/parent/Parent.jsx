import React from 'react';
import Child from '../child/Child';

function  Parent() {
   
    let person  ={ 
        "name":"khaled",
        "age":50,
        "salery":3500,
        "target":66000,
        "theSales":1000000
        }
   
    return (
       
        
        <>
           <Child info= {person}/>
        </>
    );
}

export default Parent;
