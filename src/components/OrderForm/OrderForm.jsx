import React from 'react'

export default function OrderForm() {
    const data = {
        count: 750
    }
    const getPackNumber = async (event) => {
        event.preventDefault();
        let response = await fetch("https://bqst6iv3sj.eu-west-1.awsapprunner.com/place-order", {
            method: "POST",
            body: JSON.stringify(data),
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
        <input type="number" className='w-100' />
        <button className='btn btn-light' type='submit'>Submit</button>
    </form>
  )
}
