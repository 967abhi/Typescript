import React from 'react'
interface Persondetails{
    Details:{
        FName:string,
        LastName:string,
        Age:number,
        isVegan:boolean
    }
}
const Persondetails = (props:Persondetails) => {
  return (
    <div>
        <div>First name - {props.Details.FName}</div>
        <div>Last name - {props.Details.LastName}</div>
        <div>Age-{props.Details.Age}</div>
        <div>Vegatarian-{props.Details.isVegan ? <p>He is vegan</p>:<p>He is not vegan </p>}</div>
      
    </div>
  )
}

export default Persondetails
