import React from 'react'
interface PropsType{
    name:string,
    age:number,
    iselgigible:boolean
}
const Home = (props:PropsType) => {
  return (
    <>
    
    <div>
      Hey {props.name} ,welcome to the page .
    </div>
    {props.iselgigible ? <p>Your age is {props.age} and you are eligible to vote .</p> :<p>You cannot vote</p> }
    
    </>
  )
}

export default Home
