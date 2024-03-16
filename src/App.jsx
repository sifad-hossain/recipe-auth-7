import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Cook from './Components/Cook/Cook'
import Foods from './Components/Foods/Foods'
import Navbar from './Components/Navbar/Navbar'
import Title from './Components/Title/Title'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [cook, setCook] = useState([]);

  const handleAddToCook = food => {
    console.log(food);
    const newCook = [...cook, food];
    setCook(newCook);
    toast('todo is deleted');


  }
  console.log(cook);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <div className=' md:flex  w-4/5 mx-auto'>
        <Foods handleAddToCook={handleAddToCook}></Foods>
        <ToastContainer></ToastContainer>
        <Cook cook={cook}></Cook>
      </div>
    </>
  )
}

export default App
