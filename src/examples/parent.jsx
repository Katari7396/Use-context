import React from "react"
import Child from "./child"
     
export const InfoContext=React.createContext()


const Parent=()=>{
   return(
    <div>

        <h1><InfoContext.Provider value={'Hello KATARI'}>
            <Child/>
            </InfoContext.Provider>
        </h1>
        
    </div>
   )
}
export default Parent;