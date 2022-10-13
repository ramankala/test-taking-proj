import React, { useState } from 'react';

import { qBank2 } from './Data';
import './styles/TestB.css';

const TestB = () => {

    const [id, setId] = useState(1);

    const [btnText, setBtnText] = useState('Next');


    const handleCycle = () => {
        if (id < 10){
            setId(id + 1);
        }
        if (id === 10){
            setBtnText('Submit')
        }
    }

    return (
        <div className = 'containerB'>{qBank2.map(question => {
            if (question.id === id){
                return (
                    <div key = {question.id} className = 'astroExam'>
                        <div>
                            <div>{question.question}</div>
                            <div className = 'examQ'>
                                <div className = 'qA'>
                                    <input type='radio' id = 'qA' name = 'choices' /> 
                                    {question.A}
                                </div>
                                <div className = 'qB'>
                                    <input type='radio' id = 'qB' name = 'choices'/>
                                    {question.B}
                                    </div>
                                <div className = 'qC'>
                                    <input type='radio' id = 'qC' name = 'choices'/>
                                    {question.C}
                                    </div>
                                <div className = 'qD'>
                                    <input type='radio' id= 'qD' name = 'choices'/>
                                    {question.D}
                                    </div>
                            </div>
                        </div>
                        <div onClick={handleCycle} className='nextBtn'>{btnText}</div>
                    </div>
                )
            }
        })}</div>
    )
}

export default TestB;