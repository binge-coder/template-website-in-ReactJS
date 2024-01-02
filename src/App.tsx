import { SpeedInsights } from '@vercel/speed-insights/react';
import Content from './Content.tsx'
import Navbar from './components/Navbar.tsx'
import ScrollLine from './components/ScrollLine.tsx'
import Banner from './components/Banner.tsx';
import { useState, useEffect } from 'react';

function App() {

  const [showBanner, setShowBanner] = useState(true);
  function handleBannerOnClick() {
    setShowBanner(() => false);
  } 

  useEffect(() => {
    let value = window.localStorage.getItem('newFeaturesLocalStorageTest');
    console.log(`value from uE 1 is : ${value}`);
    if(value !== null) setShowBanner(JSON.parse(value));
  }, [])
  

  useEffect(() => {
    console.log(`showBanner value from uE 2 is : ${showBanner}`);
    window.localStorage.setItem('newFeaturesLocalStorageTest', JSON.stringify(showBanner));
  
  }, [showBanner])
  return (
    <>
      <Navbar>
      </Navbar>
      <ScrollLine></ScrollLine>
      {showBanner && <Banner passOnClick={handleBannerOnClick} ></Banner> }
     <div className='bg-base-200 text-base-content my-2 mx-4 md:mx-10 lg:mx-32 xl:mx-72 rounded-md p-6 '>
      <Content></Content>
      <SpeedInsights />
      </div>
    </>
  )
}

export default App
