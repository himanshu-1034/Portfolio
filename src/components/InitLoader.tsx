import React, { ReactElement, useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";

let curr: number = 1, stepinterval: any;
export default function ({ setDone }: { setDone: () => void }): ReactElement {
    const stages: any[] = [
        { label: "Loading Personal Information", percentage: 10 },
        { label: "Loading Experience", percentage: 50 },
        { label: "Loading Skills", percentage: 80 },
        { label: "Loading Socials", percentage: 90 },
        { label: "Oops! Forgot to add Photograph... 1 sec...", percentage: 100 },
    ]
    const [currStage, setCurrStage] = useState<any>(stages[0]);

    useEffect(() => {
        clearInterval(stepinterval);
        stepinterval = setInterval(() => {
            if (stages[curr]) {
                setCurrStage(stages[curr]);
                curr += 1;
            } else {
                clearInterval(stepinterval)
                setDone();
            }
        }, 1000)
    }, [])

    return (
        <section style={{ height: '100vh', width: '100%' }} className="d-flex align-items-center justify-content-center init-loading">
            <div className="init-loading-inner-wrapper">
                <h4>{currStage?.label ?? ""}</h4>
                <ProgressBar variant="dark" now={currStage?.percentage ?? 0} style={{ width: '100%' }} />
            </div>
        </section>
    )
}