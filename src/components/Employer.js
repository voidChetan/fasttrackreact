import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Employer = () => {

    const [employerList, setEmployerList] = useState([]);

    const [employerObj, setEmployerObj] = useState({
        "employerId": 0,
        "companyName": "",
        "emailId": "",
        "mobileNo": "",
        "phoneNo": "",
        "companyAddress": "",
        "city": "",
        "state": "",
        "pinCode": "",
        "logoURL": "",
        "gstNo": ""
    });

    const changeFormObj = (event,key)=> {
        setEmployerObj(prevObj => ({...prevObj,[key]:event.target.value}))
    }

    useEffect(() => {
        getEmployer();
    },[])

    const getEmployer = async () => {
        const result = await axios.get("https://freeapi.gerasim.in/api/JobPortal/GetAllEmployer");
        debugger;
        setEmployerList(result.data.data);
    }

    const onSave = async () => {
        debugger;
        const result =  await axios.post("https://freeapi.gerasim.in/api/JobPortal/AddNewEmployer", employerObj);
        debugger;
        if(result.data.result) {
            alert('Employer Created Success');
            getEmployer();
        } else {
            alert(result.data.message)
        }
    }
    const onEdit = (empObj) => {
        setEmployerObj(empObj);
    } 
    const onUpdate = async () => {
        debugger;
        const result =  await axios.put("https://freeapi.gerasim.in/api/JobPortal/UpdateEmployer", employerObj);
        debugger;
        if(result.data.result) {
            alert('Employer Update Success');
            getEmployer();
        } else {
            alert(result.data.message)
        }
    } 

    const onDelete = async (employerId) => {
        const isDelete = window.confirm("Are you Sure want ot delte");
        if(isDelete) {
            const result =  await axios.delete("https://freeapi.gerasim.in/api/JobPortal/DeleteEmployerById?employerId=" + employerId);
            debugger;
            if(result.data.result) {
                alert('Employer Update Success');
                getEmployer();
            } else {
                alert(result.data.message)
            }
        }
        
       
    } 

   

    return (
        <div>
            {JSON.stringify(employerObj)}
            <div className='row'>
                <div className='col-7'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            Employerr List
                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr no</th>
                                        <th>  Company Name</th>
                                        <th>  EmailId</th>
                                        <th>  mobileNo</th>
                                        <th> Address</th>
                                        <th>City</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        employerList.map((item,index)=> {
                                            return (<tr>
                                                <td>{index+1}</td>
                                                <td> {item.companyName}</td>
                                                <td> {item.emailId}</td>
                                                <td> {item.mobileNo}</td>
                                                <td> {item.companyAddress}</td>
                                                <td> {item.city}</td>
                                                <td> 
                                                    <button className='btn btn-success' onClick={()=>{onEdit(item)}}>Edit</button>
                                                    <button className='btn btn-danger' onClick={()=>{onDelete(item.employerId)}}>Delete</button>
                                                </td>
                                            </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='card'>
                        <div className='card-header bg-success'>
                            New Employeer
                        </div>
                        <div className='card-body'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <label>Company Name</label>
                                        <input type='text' value={employerObj.companyName} onChange={(event)=>{changeFormObj(event,'companyName')}} className='form-control' />
                                    </div>
                                    <div className='col-6'>
                                        <label>EmailId</label>
                                        <input type='text' value={employerObj.emailId} onChange={(event)=>{changeFormObj(event,'emailId')}} className='form-control' />
                                    </div>
                                    <div className='col-6'>
                                        <label>Mobile No</label>
                                        <input type='text' value={employerObj.mobileNo} onChange={(event)=>{changeFormObj(event,'mobileNo')}} className='form-control' />
                                    </div>
                                    <div className='col-6'>
                                        <label>PhoneNo</label>
                                        <input type='text' value={employerObj.phoneNo} onChange={(event)=>{changeFormObj(event,'phoneNo')}} className='form-control' />
                                    </div>
                                    <div className='col-6'>
                                        <label>Gst No</label>
                                        <input type='text' value={employerObj.gstNo} onChange={(event)=>{changeFormObj(event,'gstNo')}} className='form-control' />
                                    </div>
                                    <div className='col-12'>
                                        <label>Address</label>
                                       <textarea className='form-control' value={employerObj.companyAddress} onChange={(event)=>{changeFormObj(event,'companyAddress')}}></textarea>
                                    </div>
                                </div>
                                <div className='row pt-3'>
                                    <div className='col-12 text-center'>
                                        {
                                            employerObj.employerId ==0 &&  <button className='btn btn-primary' onClick={onSave}>Save</button>
                                        }
                                        {
                                            employerObj.employerId != 0 &&      <button className='btn btn-success' onClick={onUpdate}>Update</button>
                                        }
                                       
                                    
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employer;