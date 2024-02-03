import React, { useState } from 'react';

const HideShow = () => {
    const [isDiv1Visible, setDiv1] = useState(true);
    const [num1,setNum1] = useState('');
    const [num2,setNum2] = useState('');

    const onNum1Change = (event)=> {
        setNum1(event.target.value)
    }

    const onNum2Change = (event)=> {
        setNum2(event.target.value)
    }

    const showdiv1 = () => {
        setDiv1(true)
    }
    const hideDiv1 = () => {
        setDiv1(false)
    }
    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    {
                        isDiv1Visible && <div className='p-3 bg-primary'  >
                            Div 1
                        </div>
                    }
                    {
                        isDiv1Visible == false && <div className='p-3 bg-danger'  >
                            Div 1
                        </div>
                    }
                </div>
                <div className='col-3'>
                    {
                        num1 == num2 && <div className='p-4 bg-secondary'    >
                        Div 2 
                    </div>
                    }
                    
                </div>
                <div className='col-3'>
                    <div className='p-2'  >
                        Div 3
                        <input type='checkbox' />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-3 text-center'>
                    <button className='btn btn-success' onClick={showdiv1}>Show</button>
                    <button className='btn btn-danger' onClick={hideDiv1}>Hide</button>
                </div>
                <div className='col-3'>
                    <input className='form-control' onChange={(event)=>{onNum1Change(event)}} type='text' />
                    <input className='form-control' onChange={(event)=>{onNum2Change(event)}} type='text' />
                </div>
                <div className='col-3'>
                    <div className='p-2'  >
                        Div 3
                        <input type='checkbox' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HideShow;