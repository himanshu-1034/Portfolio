import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';

export default function GetInTouch(): ReactElement {
    const [email, setEmail] = useState<string>('');
    const [isMailSent, setIsMailSent] = useState<boolean>(false);
    return (
        <section id='getintouch-panel' className='info-panel'>
            <h4 className='d-flex align-items-center justify-content-center' style={{ marginBottom: '10px' }}><u>Get In touch</u></h4>
            <div className='row'>
                <div className='col-12 card-no-transition box-shadow'>
                    {!isMailSent ? (
                        <form onSubmit={(e: FormEvent) => { e.preventDefault(); setEmail(''); setIsMailSent(true); }} className='d-flex align-items-center'>
                        <input style={{flex: 1}} className='form-input' value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} type='email' placeholder='Your Email' />
                        <button type='submit' className='form-button' style={{marginLeft: '5px'}}>Send!</button>
                    </form>
                    ) : (
                        <div className='d-flex align-items-center justify-content-center'>We will get in touch soon!</div>
                    )}
                </div>
            </div>
        </section>
    )
}