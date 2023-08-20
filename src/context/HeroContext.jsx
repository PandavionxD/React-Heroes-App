
import { useContext, useState } from 'react'
import { createContext } from 'react'

export const HeroContext = createContext()

export const HeroProvider = ({children})=>{

const [user, setuser] = useState(false)

    return(
    <HeroContext.Provider value={{ user,setuser }} >
        {children}
    </HeroContext.Provider>
    )
}

export const UseUserContext = ()=> useContext(HeroContext)
