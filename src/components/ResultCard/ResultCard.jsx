import React from 'react'
import { DataState } from '../../context/DataProvider'

export default function ResultCard() {
    const {data, setData} = DataState()
    const restart = ()=>{
        setData()
    }
  
    if(data){
        const keys = Object.keys(data)
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        <div class="card col-8 col-md-4">
  <div class="card-header">
    To meet this number, you will need to order the following packs
  </div>
  <ul class="list-group list-group-flush">
      { keys.map((key)=> data[key] > 0 && <li class="list-group-item">{data[key]} x {key}</li>)}

  </ul>
</div>
    <button className='btn btn-light mt-3' onClick={restart}>Restart</button>
    </div>
  )
    }
}
