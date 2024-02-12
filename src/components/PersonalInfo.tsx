import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
import ExperienceTimer from './ExperienceTimer';

// @ts-ignore
const logo = require('../resources/images/png/Himanshu.png');

function PersonalInfo(): ReactElement {
    return (
        <section style={{ width: '100vw' }} id='personal-info' className='info-panel'>
            <div className='row'>
                <div className='col-12 d-flex align-items-center justify-content-center'>
                    <img src={logo} className='photo' alt='Me' />
                </div>
            </div>
            <div className='row info-card'>
                <div className='col-12 d-flex align-items-center justify-content-center' style={{flexDirection: 'column'}}>
                    <h3>Himanshu Arora</h3>
                    <h6>Software Developer</h6>
                    <h6 className='d-flex align-items-center cursor-pointer' onClick={() => {window.open('tel:+917814089575', '_blank')}}>
                        <FontAwesomeIcon icon={faMobile} style={{marginRight: '10px'}} flip='horizontal' />
                        {'+91 78140 89575'}
                    </h6>
                    <h6 className='d-flex align-items-center cursor-pointer' onClick={() => {window.open('mailto:arorahimanshu.ha@gmail.com', '_blank')}}>
                        <FontAwesomeIcon icon={faEnvelope} style={{marginRight: '10px'}} flip='horizontal' />
                        {'arorahimanshu.ha@gmail.com'}
                    </h6>
                    <h6 style={{textAlign: 'center'}}>Majors : ReactJS, Typescript, Next13, Tailwind, React Native, MongoDB, NodeJS, ExpressJS</h6>
                    <h6 style={{textAlign: 'center'}}>Vocals : English, Hindi, Punjabi</h6>
                    <h6 style={{textAlign: 'center'}}>Total Experience : <ExperienceTimer /></h6>
                    <h6 style={{textAlign: 'center'}}>Software Developer having around 3 years of professional work experience in developing frontend for several web based applications using ReactJs, TypeScript and Tailwind and about 1.5 Years of total experience in developing Native Applications with React-Native.</h6>
                </div>
            </div>
        </section>
    )
}

export default PersonalInfo