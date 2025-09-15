
import { useContext } from "react"
import { Context } from "../../contexts/expression"


export default function({value ,classname = ""}){

    const {exp , setexp , screanexp , setscreanexp} = useContext(Context);

    function cklickHandelar (){
        setexp(exp + value);
        setscreanexp(screanexp+value)
    }

    return(

        <button onClick={cklickHandelar} className={classname}>{value}</button>
    )
}

