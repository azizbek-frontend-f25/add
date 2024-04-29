import { Children, createContext, useState } from "react";

export const BasketContext = createContext([])

const BasketProvider = ({children}) =>{
const [basData,setBasData] = useState([])

    return(
        <BasketContext.Provider>
            {children}  
        </BasketContext.Provider>
    )
}