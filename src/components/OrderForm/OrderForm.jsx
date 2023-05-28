import React, {useState} from 'react'

export default function OrderForm() {
    const [body, setBody] = useState({ count: 0});

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
            console.log(data)
        })
        // console.log(json.json())
      }
  return (
    <form action="" onSubmit={getPackNumber} className='d-flex flex-column w-25 align-items-center'>
        <label htmlFor="orderNumber">How many items would you like to order?</label>
        <input type="number" onChange={handleUserInput} name='count' className='w-100' />
        <button className='btn btn-light' type='submit'>Submit</button>
    </form>
  )
}
