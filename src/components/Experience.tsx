import React, { ReactElement } from 'react';

export default function Experience(): ReactElement {
    return (
        <section id='experience-panel' className='info-panel'>
            <h4 className='d-flex align-items-center justify-content-center' style={{marginBottom: '10px'}}><u>Professional Experience</u></h4>
            <div className='row'>
                <div className='col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12'>
                    <div className='card box-shadow rounded-borders'>
                        <h5 className='cursor-pointer' onClick={() => { window.open('https://www.privafy.com', '_blank') }}>Privafy Technologies India Pvt Ltd - Software Engineer</h5>
                        <label className='f-12px'>Mar 2021 - Present</label>
                        <ul style={{listStyleType: 'disc', marginTop: '15px'}}>
                            <li>Worked Proactively in the development of several high priority feature requirements given directly by the customers.</li>
                            <li>Integrated the Rest APIs with frontend code using Axios</li>
                            <li>Introduced dynamic theming in our web portal to provide every customer with a
                                specific color coding flavor with only 1% of the code change.</li>
                            <li>Integrated Elastic search based data model on UI to fetch data from Elastic DB and
                                display it on UI</li>
                            <li>Have developed a fully functional data table having support for resizing, filtering,
                                sorting and what not.</li>
                            <li>Have lead the team in developing a mobile based native platform for our web portal
                                consumers using ReactNative</li>
                            <li>Have traveled to customer premises in Riyadh and conducted several discussions for
                                the betterment of product</li>
                            <li>Have contributed in integrating i18n (Locale based language translation) in the web
                                portal.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}