import React, { useState } from 'react';

const DynamicClass = () => {

    const myPrimaryClass = "bg-primary";
    const [secondDivClass, setSeconDiv] = useState('');
    const [isActive, setIsActive] = useState(false);

  

    const changediv2Class = (event) => {
        setSeconDiv(event.target.value)
    }
    const chnageActivation = (event) => {
        setIsActive(event.target.checked)
    }

    const [isProductActive, setProductActive] = useState(false);

    const toggleValue = () => { 
        setProductActive(!isProductActive)
    }

    return (
        <div>
            <h2>{isProductActive? 'Yes':'No'}</h2>
            <div className='row'>
                <div className='col-3'>
                    <div className={`p-2 ${myPrimaryClass}`}  >
                        Div 1
                    </div>
                </div>
                <div className='col-3'>
                    <div className={`p-2 ${secondDivClass}`}   >
                        Div 2
                        <input className='form-control' onChange={(event)=>{changediv2Class(event)}}   type='text'/>
                    </div>
                </div>
                <div className='col-3'>
                    <div className={`p-2 ${isActive? 'bg-success':'bg-danger'}`} >
                        Div 3
                        <input type='checkbox' onChange={(event)=>{chnageActivation(event)}}  />
                    </div>
                </div>
                <div className='col-3'>
                     <button className='btn btn-primary' onClick={toggleValue}> Toggle</button>
                </div>
            </div>
        </div>
    );
};

export default DynamicClass;