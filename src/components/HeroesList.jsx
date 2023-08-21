import React from 'react'
import { HeroItem } from './HeroItem'

export const HeroesList = ({heroes}) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 mb-12 lg:grid-cols-4 xl:grid-cols-6  my-3 container gap-5' >
        {heroes.map((hero,id) =>(
            <HeroItem key={id} hero={hero}   />
        ))}
    </div>
  )
}
