import React, { ReactElement } from "react";

export default function Education(): ReactElement {
    return (
        <section className="info-panel" id='education-panel'>
            <div className="row">
                <div className="col-lg-12 col-xl-12 col-md-12 col-sm-12 col-xs-12">
                    <h4 className="d-flex align-items-center justify-content-center" style={{marginBottom: '10px'}}><u>Educational Qualifications</u></h4>
                    <div className="card box-shadow">
                        <section style={{ margin: '10px 0px' }}>
                            <h5 className="cursor-pointer" onClick={() => { window.open(`https://www.chitkara.edu.in/cse/`, '_blank') }}>B.E. (Computer Science & Engineering), Chitkara University</h5>
                            <label className="f-12px">Rajpura, Punjab</label><br/>
                            <label className="f-12px">2018-2022 (9.83 CGPA)</label>
                        </section>
                        <section style={{ margin: '10px 0px' }}>
                            <h5 className="cursor-pointer" onClick={() => { window.open(`https://ssis.ac.in/`, '_blank') }}>12<sup>th</sup>, Science, Saint Soldier International School</h5>
                            <label className="f-12px">Chandigarh</label><br/>
                            <label className="f-12px">2017-2018 (89.6%)</label>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}