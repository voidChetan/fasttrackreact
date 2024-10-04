import React, { useState } from 'react';

const ArrayModification = () => {

    const [cityList, setCityList] =  useState([]);

    const [cityName,setCityName] = useState('Pune');

    const onCityChange =(event)=> {
        setCityName(event.target.value)
    } 

    const addCity = () => {
        setCityList(preList => [cityName,...preList]);
        setCityName('');
    }

    return (
        <div>
            <p>{cityList}</p>
            <div className='row'>
                <div className='col-3'>
                    <input type='text' value={cityName} onChange={(event)=>{onCityChange(event)}} placeholder='ENtre City '/>
                </div>
                <div className='col-3'>
                    <input type='button' onClick={addCity} className='btn btn-primary' value={'Add City'}/>
                </div>
            </div>
        </div>
    );
};

export default ArrayModification;