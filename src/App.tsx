import React, { useEffect, useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Socials from './components/Socials';
import Experience from './components/Experience';
import Education from './components/Education';
import GetInTouch from './components/GetInTouch';
import InitLoader from './components/InitLoader';

function App() {
  const [isLoadingDone, setIsLoadingDone] = useState<boolean>(sessionStorage?.getItem?.('initloading') ? true : false);

  return (
    isLoadingDone ? (
      <>
      <PersonalInfo />
      <Experience />
      <Education />
      <GetInTouch />
      <Socials />
    </>
    ) : (
      <InitLoader setDone={() =>{setIsLoadingDone(true); sessionStorage.setItem('initloading', 'done')}} />
    )
  );
}

export default App;
