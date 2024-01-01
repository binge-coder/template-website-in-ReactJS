import './App.css'
import Content from './Content.tsx'
import Navbar from './components/Navbar.tsx'
// import { motion, useScroll, useSpring } from "framer-motion";
import ScrollLine from './components/ScrollLine.tsx'

function App() {

  return (
    <>
      <Navbar>
      </Navbar>
      <ScrollLine></ScrollLine>
     <div className='bg-base-200 text-base-content my-2 mx-10 lg:mx-32 xl:mx-72 rounded-md p-6 '>
      <Content></Content>
      </div>


     
    </>
  )
}

export default App
