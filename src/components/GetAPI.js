import axios from 'axios';
import React, { useState } from 'react';

const GetAPI = () => {

    const[allProducts,setAllProducts] = useState([]);

    const loadProducts =  async () => {
        const result =  await axios.get("https://freeapi.gerasim.in/api/BigBasket/GetAllProducts");
        debugger;
        setAllProducts(result.data.data);
    }

    const getAllProducts = () => {
        debugger;
        fetch("https://freeapi.gerasim.in/api/BigBasket/GetAllProducts").then((result)=>{
            debugger;
             return result.json();
        }).then((res)=>{
            debugger;
            setAllProducts(res.data);
        })
    }

    return (
        <div>
                <button className='btn btn-primary' onClick={loadProducts}>Load products</button>
                <button className='btn btn-success' onClick={getAllProducts}>Load products</button>
                <div className='row'>
                    <div className='col-12'>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Sr no</th> 
                                <th>  Name</th>
                                <th>  Sku</th>
                                <th>  Short Name</th>
                                <th>Delivery TimeSpan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allProducts.map((item,index)=>{
                                    return(<tr>
                                        <td>{index+1}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.productSku}</td>
                                        <td>{item.productShortName}</td>
                                        <td>{item.deliveryTimeSpan}</td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
        </div>
    );
};

export default GetAPI;