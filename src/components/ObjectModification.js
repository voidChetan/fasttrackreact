import React, { useState } from 'react';

const ObjectModification = () => {

    const [studObj,setStudObj] = useState({name:'',email:'',password:'',isActive: false});
    
    // const onNameChange = (event) => {
    //     setStudObj(prevObj => ({...prevObj, name: event.target.value}))
    // }

    // const onEmailChange = (event) => {
    //     setStudObj(prevObj => ({...prevObj, email: event.target.value}))
    // }

    const updateFormValue = (event, key) => { 
        if(key == 'isActive') {
            setStudObj(prevObj => ({...prevObj, [key]:event.target.checked}))
        }  else {
            setStudObj(prevObj => ({...prevObj, [key]:event.target.value}))
        }
        
    }


    return (
        <div>
            <p>{JSON.stringify(studObj)}</p>
            <section className="vh-100" >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"> 
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p> 
                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input value={studObj.name} onChange={(event)=>{updateFormValue(event, 'name')}} type="text" id="form3Example1c" className="form-control" />
                                                        <label className="form-label" for="form3Example1c">Your Name</label> 
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input value={studObj.email} type="email" onChange={(event)=>{updateFormValue(event,'email')}} id="form3Example3c" className="form-control" />
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" onChange={(event)=>{updateFormValue(event,'password')}} id="form3Example4c" className="form-control" />
                                                        <label className="form-label" for="form3Example4c">Password</label>
                                                    </div>
                                                </div> 

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="checkbox" onChange={(event)=>{updateFormValue(event,'isActive')}} id="form3Example4c"   />
                                                        <label className="form-label" for="form3Example4c">iS Active</label>
                                                    </div>
                                                </div> 

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ObjectModification;