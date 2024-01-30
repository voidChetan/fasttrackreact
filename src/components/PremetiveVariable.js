import React, { useState } from 'react';

const PremetiveVariable = () => {

    //string. number, boolen, date
    const [studentName, setStudentName] = useState("Chetan");
    const [productPrice, setProductPrice] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [currentDate, setCurrentdate] = useState(new Date());

    const changeName = () => {
        setStudentName("Aditya")
    }

    const changeProductPrice = (event) => {
        debugger;
        setProductPrice(event.target.value)
    }

    const chnageActiveStatus = (event) => {
        debugger;
        setIsActive(event.target.checked)
    }

    return (
        <div>
            <div className='row'>
                <div className='col-3'>
                    Name: {studentName} <br/>
                    <button onClick={changeName} className='btn btn-primary'>Change Name</button>
                </div>
                <div className='col-3'>
                    Product Price : {productPrice}
                    <br/>
                    <input type='text' onChange={(event)=> {changeProductPrice(event)}} placeholder='Price'/>
                </div>
                <div className='col-3'>
                    Active: {isActive ? 'Yes': 'No'}
                    <br/>
                    <input type='checkbox' onChange={(event)=> {chnageActiveStatus(event)}} placeholder='Price'/>
                </div>
                <div className='col-3'>
                    currentDate: {currentDate.toString()}
                </div>
            </div>
        </div>
    );
};

export default PremetiveVariable;