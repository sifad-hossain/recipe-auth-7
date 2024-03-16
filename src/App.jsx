import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cook from './Components/Cook/Cook'
import Foods from './Components/Foods/Foods'
import Navbar from './Components/Navbar/Navbar'
import Title from './Components/Title/Title'



function App() {

  const [cook, setCook] = useState([]);

  const handleAddToCook = food =>{
    console.log(food);
    const newCook = [...cook, food];
    setCook(newCook)
    
  }
  console.log(cook);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <div className=' md:flex  w-4/5 mx-auto'>
        <Foods handleAddToCook={handleAddToCook}></Foods>
        <Cook cook={cook}></Cook>
      </div>
    </>
  )
}

export default App
