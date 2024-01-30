import React from 'react';

const User = () => {
    let courseName = "React";
    let courseDuration = "3 Months";

    const chnageCourseName = () => {
        debugger;
        courseName = "Angular"
    }
    return (
        <div>
            <h1>Hi From User Page</h1>
            <h3> {courseName }</h3>
            <p> {courseDuration}</p>
            <button className='btn btn-primary' onClick={chnageCourseName}>
                Change Course Name
                </button>
        </div>
        
    );
};

export default User;