import React, { useState } from 'react';

const Style = () => {

    const [myBackColor, setBakcColor] = useState('');

    const [isActive, setIsActive] = useState(true);

    const changeBackColor = (event) => {
        setBakcColor(event.target.value)
    }
    const onActivtaeChnage =(event) => {
        setIsActive(event.target.checked)
    }
    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    <div className='p-2' style={{backgroundColor: 'red', color: 'white'}}>
                        Div 1
                    </div>
                </div>
                <div className='col-3'>
                    <div className='p-2' style={{backgroundColor: myBackColor }}  >
                        Div 2
                        <input className='form-control' onChange={(event)=>{changeBackColor(event)}} type='text'/>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='p-2' style={{backgroundColor: isActive ? 'green' : 'red' }}>
                        Div 3
                        <input type='checkbox' onChange={(event)=>{onActivtaeChnage(event)}} />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Style;
