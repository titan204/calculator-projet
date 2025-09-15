import './App.css';
import Expression from './contexts/expression';
import NumButtons from './components/buttons/NumButtons';
import Screan from './components/Screan';
import Equal from './components/buttons/Equal';
import FunButton from './components/buttons/FunButton';
import DelButton from './components/buttons/DelButton';
import * as math from "mathjs";

function App() {
  return (
    <div className="App">
      <Expression>
        <Screan/>
        <div className='buttons-div'>
          <FunButton symbol={"i"} onscrean={"i"} />
          <FunButton symbol={"+"} onscrean={"deg"} />
          <FunButton symbol={"sin("} onscrean={"sin("} />
          <FunButton symbol={"cos"} onscrean={"cos("} />
          <FunButton symbol={"tan("} onscrean={"tan("} />

          <FunButton symbol={"+"} onscrean={"x^y"} />
          <FunButton symbol={"log("} onscrean={"log("} />
          <FunButton symbol={"ln("} onscrean={"ln("} />
          <FunButton symbol={"("} onscrean={"("} />
          <FunButton symbol={")"} onscrean={")"} />


          <FunButton symbol={"sqrt("} onscrean={"sqrt("} />
          <DelButton  type = "del"/>
          <DelButton  type = "AC" />
          <FunButton symbol={"mod("} onscrean={"mod("} classname="ora" />
          <FunButton symbol={"/"} onscrean={"/"} classname="ora"/>
          <FunButton symbol={"Infinity"} onscrean={"∞"} />

          <NumButtons value={7}/>
          <NumButtons value={8}/>
          <NumButtons value={9}/>
          <FunButton symbol={"*"} onscrean={"x"}classname="ora" />
          <FunButton symbol={"phi"} onscrean={"phi"} />
          <NumButtons value={4}/>
          <NumButtons value={5}/>
          <NumButtons value={6}/>
          <FunButton symbol={"-"} onscrean={"-"} classname="ora"/>
          <FunButton symbol={"pi"} onscrean={"π"} />
          <NumButtons value={1}/>
          <NumButtons value={2}/>
          <NumButtons value={3}/>
          <FunButton symbol={"+"} onscrean={"+"} classname="ora"/>
          <FunButton symbol={","} onscrean={","} />
          <FunButton symbol={"e"} onscrean={"e"} />
          <NumButtons value={0}/>
          <NumButtons value={"."}/>
          <Equal classname="Equal"/>
        </div>
      </Expression>
    </div>
  );
}

export default App;
