import React, { useEffect, useState } from 'react';

import qBank from './Data';
import './styles/TestA.css';

const TestA = () => {

    const [state, setState] = useState([]);
    const [id, setId] = useState(1);

    // useEffect(() => {
    //     console.log(qBank);
    //     qBank.forEach(question => {
    //         console.log(question);
    //         setState([...question]);
    //     })
    //     console.log(state);
    // },[]);

    const handleCycle = () => {
        setId(id + 1);
    }

    return (
        <div className = 'containerA'>{qBank.map(question => {
            if (question.id === id){
                return (
                    <div key = {question.id} className = 'bioExam'>
                        <div>{question.question}</div>
                        <div>a. {question.A}</div>
                        <div>b. {question.B}</div>
                        <div>c. {question.C}</div>
                        <div>d. {question.D}</div>
                        <div onClick={handleCycle} className='nextBtn'> Next </div>
                    </div>
                )
            }
        })}</div>
    )
}

export default TestA;