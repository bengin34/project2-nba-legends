import React from 'react'
import {data} from '../utils/data'
import PlayerCard from './PlayerCard'

const CardContainer = () => {

  return (
    <div className='container h-full mx-auto p-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 rounded-md min-h-[300px]'>
    {data.map(({name,img,statistics}) =>{
   
          return (
            <PlayerCard key={name} name={name} img={img} statistics={statistics} />
            );
      
    })}
    </div>
  )
}

export default CardContainer
