import React, {useState} from 'react'
import { DataState } from '../../context/DataProvider';
export default function OrderForm() {
    const [body, setBody] = useState({ count: 0});
    const {data, setData} = DataState()

    const handleUserInput = (event) => {
        const { name, value } = event.target;

        const count = parseInt(value)
  
        setBody({[name]: count });
      };
    const getPackNumber = async (event) => {
        event.preventDefault();
        console.log(body)
        let response = await fetch("https://bqst6iv3sj.eu-west-1.awsapprunner.com/place-order", {
            method: "POST",
            body: JSON.stringify(body),
            headers : { "Content-Type": "application/json", 'Access-Control-Allow-Origin': '*' }
            
        });
        response.json().then(data=>{
            setData(data)
        })
        // console.log(json.json())
      }
      if(!data){
  return (
    <form action="" onSubmit={getPackNumber} className='d-flex flex-column col-8 col-md-4 align-items-center '>
        <label htmlFor="orderNumber">How many items would you like to order?</label>
        <input type="number" onChange={handleUserInput} name='count' className='w-100 my-4' />
        <button className='btn btn-light' type='submit'>Submit</button>
    </form>
      
  )
      }
}
