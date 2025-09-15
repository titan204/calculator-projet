import { useState , createContext } from "react";

export const Context = createContext();




export default function Expression ({children}){
    const [exp , setexp ] = useState ("")
    const [screanexp , setscreanexp ] = useState ("")

    return(
        <Context.Provider value={{exp , setexp , screanexp , setscreanexp }}>
        {children}
        </Context.Provider>
    )

}