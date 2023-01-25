import React from 'react'

const Contador = ({cont,setC,a}) => {

  let  boton = ()=> {setC(cont +1)}
  
   

  if(a.length <= cont ){ setC(0)}  
  return (
  <>
  
  <button onClick={boton}>Push</button>
     <h1>{a[cont]}</h1> {/*slider */}
     
    
  
  
  </>
  )
}

export default Contador