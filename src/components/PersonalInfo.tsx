import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import ExperienceTimer from './ExperienceTimer';
import Socials from './Socials';
import Experience from './Experience';

// @ts-ignore
const logo = require('../resources/images/png/Himanshu.png');

function PersonalInfo(): ReactElement {
    return (
        <section style={{ width: '100%', height: '100%' }}>
            <div className='row'>
                <div className='col-12 d-flex align-items-center justify-content-center p-10px' style={{flexDirection: 'column'}}>
                    <h1>Himanshu Arora</h1>
                    <Socials />
                    <div className='border-grow-animation' />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 col-sm-12 photo-container'>
                    <img src={logo} className='photo glow-box-shadow' alt='Me' />
                </div>
                <div className='col-md-8 col-sm-12 content-container justify-content-center d-flex' style={{flexDirection: 'column'}}>
                    <h2>Software Developer</h2>
                    <h6 className='d-flex align-items-center cursor-pointer phone-number' onClick={() => {window.open('tel:+917814089575', '_blank')}}>
                        <FontAwesomeIcon icon={faMobile} style={{marginRight: '10px'}} flip='horizontal' />
                        {'+91 78140 89575'}
                    </h6>
                    <h6 className='d-flex align-items-center cursor-pointer email' onClick={() => {window.open('mailto:arorahimanshu.ha@gmail.com', '_blank')}}>
                        <FontAwesomeIcon icon={faEnvelope} style={{marginRight: '10px'}} flip='horizontal' />
                        {'arorahimanshu.ha@gmail.com'}
                    </h6>
                    <h6>Majors : ReactJS, Typescript, Next13, Tailwind, React Native, MongoDB, NodeJS, ExpressJS</h6>
                    <h6>Vocals : English, Hindi, Punjabi</h6>
                    <h6>Total Experience : <ExperienceTimer /></h6>
                    <h6>Software Developer having around 3 years of professional work experience in developing frontend for several web based applications using ReactJs, TypeScript and Tailwind and about 1.5 Years of total experience in developing Native Applications with React-Native.</h6>
                </div>
            </div>
            <Experience />
        </section>
    )
}

export default PersonalInfo