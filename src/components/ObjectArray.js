import React, { useState } from 'react';

const ObjectArray = () => {

    const[studentObj, setStudentObj] = useState({name: '', city: '', state: ''});

    const [cityList, setCityList] =  useState(['Pune']);

    const [cityName, setCityName] = useState('');


    const updateFormValue = (event, key) => {
        debugger;
        setStudentObj(prevObj => ({...prevObj, [key]: event.target.value }))
    }

    const changeCityName = (event) => {
        setCityName(event.target.value)
    }
    const addCity = () => {
        setCityList(preList => [cityName,...preList])
    }


    return (
        <div>
            <h4>{JSON.stringify(studentObj)}</h4>
            <h5>{cityList}</h5>
            <div className='row'>
                <div className='col-4'>
                    <label>Name</label>
                    <input type='text' onChange={(event)=>{updateFormValue(event, 'name')}} className='form-control' />
                </div>
                <div className='col-4'>
                    <label>City</label>
                    <input type='text' onChange={(event)=>{updateFormValue(event, 'city')}} className='form-control' />
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <label>State</label>
                    <input type='text' onChange={(event)=>{updateFormValue(event, 'state')}} className='form-control' />
                </div> 
            </div>
            <div className='row'>
                <div className='col-4'>
                    <label>City</label>
                    <input type='text' onChange={(event)=>{changeCityName(event)}} className='form-control' />
                </div>
                <div className='col-4'>
                  <button className='btn btn-primary' onClick={addCity}>Add City</button>
                </div>
            </div>
        </div>
    );
};

export default ObjectArray;