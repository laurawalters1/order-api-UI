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

        <div className='container'>
            <div className='row'>
                <div className='col-2 col-md-4'></div>
                <OrderForm></OrderForm>
                <div className='col-2 col-md-4'></div>
            </div>

            <div className='row'>
                <div className='col-2 col-md-4'></div>
                <ResultCard></ResultCard>
                <div className='col-2 col-md-4'></div>
            </div>
        </div>
        

        </div>
    </div>
  )
}
