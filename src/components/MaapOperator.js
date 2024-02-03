import React from 'react';

const MaapOperator = () => {
    const cityList = ['Pune', 'Mumbai', 'Nagpur','Thane'];
    const studentList = [
        {id:1,name:'Chetan', contact:'9999888877',city:'Nagpur'},
        {id:2,name:'Rahul', contact:'4444555566',city:'Pune'},
        {id:3,name:'Ram', contact:'234234234234',city:'Mumbai'},
        {id:4,name:'Shyam', contact:'345345345345',city:'Thane'}
    ];

    return (
        <div>
            <div className="row">
                <div className="col-6">
                        <select>
                            {
                                studentList.map((item)=>{
                                    return (<option value={item.id}> {item.name}</option>)
                                })
                            }
                        </select>
                </div>
                <div className="col-6">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr no</th> 
                                <th>Name</th>
                                <th>Contact</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                studentList.map((item,index)=>{
                                    return(<tr>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.contact}</td>
                                        <td>{item.city}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='row'>
                <div className='col-3'>
                    <ul>
                        {
                           cityList.map((city) => {
                            return (<li>{city}</li>)
                           })
                        }
                    </ul>
                </div>
                <div className="col-3">
                    {
                        cityList.map((cityName,index)=>{
                            return(<button className='btn btn-success'> {index+1} - {cityName}</button>)
                        })
                    }
                </div>
                <div className="col-3">
                    <select>
                        {
                            cityList.map((city)=>{
                                return (<option>{city}</option>)
                            })
                        }
                    </select>
                </div>
            </div>
            
        </div>
    );
};

export default MaapOperator;