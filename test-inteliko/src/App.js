import React from 'react';
import style from './App.module.css';
import Switcher from "./components/switcher/Switcher";

let App = () => {
  return (
    <div className={style.App}>
      {/* <Switcher/> */}
      <Switcher trueText='MUST CONTAIN' falseText='MUST NOT CONTAIN' value={false}/>
    </div>
  ); 
}


export default App;
