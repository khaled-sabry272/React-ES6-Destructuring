import React from 'react';

function Child ({info}) {
    
    let {name, age , salery, target,theSales} = info;
    
    return (
        <>
          <h1>Name :: {name}</h1>  
          <h1>Age:: {age}</h1>  
          <h1>Salery :: {salery}</h1>  
          <h1>Target :: {target}</h1>  
          <h1>The Sales :: {theSales}</h1>  
          <h1>Massege :: {target<theSales?"تستاهل كوميشن":"احمد ربنا انك موجود"}</h1>  
        </>
    );
}

export default Child;
