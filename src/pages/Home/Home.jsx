import React from 'react'
import OrderForm from '../../components/OrderForm/OrderForm'
import ResultCard from '../../components/ResultCard/ResultCard'
import { DataState } from '../../context/DataProvider'

export default function Home() {
    const {data} = DataState()
    console.log("data", data)
  return (
    <div className='h-100'>
        <div className='d-flex h-75 justify-content-center align-items-center'>

        <OrderForm></OrderForm>
        <ResultCard></ResultCard>

        </div>
    </div>
  )
}
