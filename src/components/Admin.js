import React, { useState } from 'react';

const Admin = () => {

    const [studentName, setStudentName] = useState("Chetan Jogi"); //state

    const [studentState, setStudentState] = useState("Maha");
    
    const changeName = () => {
        debugger;
        setStudentName("Aditya");
    }


    return (
        <div>
            <h5>Hello From {studentName}</h5>
            <button className='btn btn-primary' onClick={changeName}>
                Change Stud Name
            </button>
        </div>
    );
};

export default Admin;