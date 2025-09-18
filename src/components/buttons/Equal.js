import { useContext } from "react";
import { Context } from "../../contexts/expression";
import {evaluate} from "mathjs"
import * as math from "mathjs"
export default function Equal (){
    const {exp , setexp , screanexp , setscreanexp} = useContext(Context)

    function cklickHandelar(){
         
        if(exp && screanexp){
            try{
                let res = evaluate(exp)
                res = String(res);            
                setexp(res);
                setscreanexp(res);
            }catch(e){
                setscreanexp("Mathematical error! : "  )
                setTimeout(() => {
                    setscreanexp("");
                    setexp("");
                }, 1000);
            }

        }
    }

    return(
        <button onClick={cklickHandelar}>=</button>
    )


}
