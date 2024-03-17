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
  const [current, setCurrent] = useState([]);


  const handleAddPrepare = (recipe_id, sifat) => {
    const isExist = current.find(items => items.recipe_name == sifat.recipe_name)
    setCurrent([...current, sifat]);
    console.log('remove bookmark', recipe_id);

    const remainig = cook.filter(coks => coks.recipe_id !== recipe_id)
    setCook(remainig);
  }

  const handleAddToCook = (food) => {
    const exist = cook.find(item => item.recipe_id == food.recipe_id)
    if (exist) {
      toast('Already exists ');
      return;
    }
    const newCook = [...cook, food];
    setCook(newCook);
  }



  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Title></Title>
      <div className=' md:flex  w-4/5 mx-auto'>
        <Foods handleAddToCook={handleAddToCook}></Foods>
        <ToastContainer></ToastContainer>
        <Cook cook={cook} handleAddPrepare={handleAddPrepare} current={current}></Cook>
      </div>
    </>
  )
}

export default App
