import React, { useEffect, useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import Socials from './components/Socials';
import Experience from './components/Experience';
import Education from './components/Education';
import GetInTouch from './components/GetInTouch';
import InitLoader from './components/InitLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import Projects from './components/Projects';

function App() {
  const [isLoadingDone, setIsLoadingDone] = useState<boolean>(sessionStorage?.getItem?.('initloading') ? true : false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps: number = 2;

  return (
    <div className='main'>
      {isLoadingDone ? (
        <div className='main-card animate-fade-in'>
          <div className='flex-1 p-10px content-pane'>
            {currentStep === 1 && (
              <>
                <PersonalInfo />
              </>
            )}
            {currentStep === 2 && (
              <div>
                <Education />
                <Projects />
              </div>
            )}
          </div>
          <div className='d-flex align-items-center justify-content-between p-10px'>
            <FontAwesomeIcon icon={faAngleLeft} className='carousal-left-icon' onClick={() => {
              setCurrentStep(prev => {
                if (prev - 1 >= 1) return prev - 1;
                return prev;
              })
            }} />
            <FontAwesomeIcon icon={faAngleRight} className='carousal-right-icon' onClick={() => {
              setCurrentStep(prev => {
                if (prev + 1 <= totalSteps) return prev + 1;
                return prev;
              })
            }} />
          </div>
        </div>
      ) : (
        <InitLoader setDone={() => { setIsLoadingDone(true); sessionStorage.setItem('initloading', 'done') }} />
      )}
    </div>
  );
}

export default App;


// {isLoadingDone ? (
//   <>
//     <PersonalInfo />
//     <Experience />
//     <Education />
//     <GetInTouch />
//     <Socials />
//   </>
//   ) : (
//   <InitLoader setDone={() => { setIsLoadingDone(true); sessionStorage.setItem('initloading', 'done') }} />
//   )}