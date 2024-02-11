import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';
// @ts-ignore
const resume = require('../resources/resume/resume.pdf')

function Socials(): ReactElement {
    return (
        <section className='info-panel' id='socials-panel'>
            <div className='row'>
                <div className='col-4 socials'>
                    <h6 className='cursor-pointer' onClick={() => {window.open(`https://www.linkedin.com/in/himanshu-arora-8bbb911a3/`, '_blank')}}>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span className='' style={{ marginLeft: 5 }}>LinkedIn</span>
                    </h6>
                </div>
                <div className='col-4 socials'>
                    <h6 className='cursor-pointer' onClick={() => {window.open(`https://github.com/himanshu-1034`, '_blank')}}>
                        <FontAwesomeIcon icon={faGithub} />
                        <span className='' style={{ marginLeft: 5 }}>Github</span>
                    </h6>
                </div>
                <div className='col-4 socials'>
                    <h6 className='cursor-pointer' onClick={() => {window.open(resume, '_blank')}}>
                        <FontAwesomeIcon icon={faFile} />
                        <span className='' style={{ marginLeft: 5 }}>Resume</span>
                    </h6>
                </div>
            </div>
        </section>
    )
}

export default Socials;