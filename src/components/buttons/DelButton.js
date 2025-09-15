import { useContext } from "react";
import { Context } from "../../contexts/expression";



export default function DelButton({type}){
    const {exp ,setexp , screanexp , setscreanexp} = useContext(Context);
    
    function clickhandelarDEl(){
        if (exp&& screanexp){
            setexp(exp.slice(0 , -1));
            setscreanexp(screanexp.slice(0,-1));
        }
    }
    function clickhandelarAC(){
        setexp("");
        setscreanexp("");
    }
    return(
        <button onClick={()=>{
            if(type === "del"){
                clickhandelarDEl()
            }else{
                clickhandelarAC()
            }
        }}
        style={{color:"#FF6600"}}
        
        >
            {type}
        </button>
    )
}