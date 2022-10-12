import React, { useState } from 'react';

import qBank from './Data';
import './styles/TestB.css';

const TestA = () => {

    const [id, setId] = useState(1);


    const handleCycle = () => {
        if (id < 10){
            setId(id + 1);
        }
    }

    return (
        <div className = 'containerA'>{qBank.map(question => {
            if (question.id === id){
                return (
                    <div key = {question.id} className = 'bioExam'>
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
                        <div onClick={handleCycle} className='nextBtn'>Next</div>
                    </div>
                )
            }
        })}</div>
    )
}

export default TestA;