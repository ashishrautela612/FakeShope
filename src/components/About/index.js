import React from 'react'

const About = () => {
  return (
    <div className='flex px-16 justify-center items-center py-6'>
      <div className=' '>
        <h1 className='text-6xl font-bold text-left pb-6' style={{color:"#545454"}}>Welcome to</h1>
        <h1 className='text-6xl font-bold text-left pb-3' style={{color:"#545454"}}>The world of</h1>
        <h1 className='text-6xl font-bold text-white p-8 rounded-xl' style={{backgroundColor: "rgb(10, 66, 117)",lineHeight:"0.5"}}>Premium Shopping</h1>
        <p className='text-xl italic font-bold text-left pt-4' style={{color:"#545454"}}>"Experience the joy of quality and style with every purchase"</p>
      </div>
    </div>
  )
}

export default About;
