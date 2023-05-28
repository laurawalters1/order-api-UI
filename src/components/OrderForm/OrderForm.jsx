import React from 'react'

export default function OrderForm() {
  return (
    <form action="" className='d-flex flex-column w-25 align-items-center'>
        <label htmlFor="orderNumber">How many items would you like to order?</label>
        <input type="number" className='w-100' />
    </form>
  )
}
