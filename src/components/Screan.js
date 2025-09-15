import { useContext, useRef} from "react"
import { Context } from "../contexts/expression"



export default function Screan(){
    const {exp  , setexp , screanexp  , setscreanexp}= useContext(Context)
    return(
        <div className="input-div">
                    <input type="text" value={screanexp} onChange={(e) => {
            setscreanexp(e.target.value)
            console.log(exp , screanexp)
        }

    } 
    
    />
       
        </div>
    )

}


