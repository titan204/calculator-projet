import { useContext } from "react";
import { Context } from "../../contexts/expression";

export default function FunButton ({symbol , onscrean , classname =""}){
    const {exp ,setexp , screanexp , setscreanexp} = useContext(Context);

    function clickhandelar(){
        setexp(exp + symbol);
        setscreanexp(screanexp + onscrean);
    }

    return(
        <button onClick={clickhandelar} className={classname}>
            {onscrean}
        </button>
    )

}