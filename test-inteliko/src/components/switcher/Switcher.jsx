import React, {useState, useEffect} from 'react';
import style from './Switcher.module.css';


let Switcher = ({value=true, trueText='IS', falseText='IS NOT'}) => {
    const [switcher, setSwitcher] = useState({
        value: value,
        trueText: trueText,
        falseText: falseText,
    });
    // useEffect( () => {
    //     console.log(switcher)
    // }, [switcher.value]);
    
    return (
        <div className={`${style.switcher} ${style['switcher_'+switcher.value]}`}>
            <div onClick={() => { setSwitcher({...switcher,value: true}) }}>{switcher.trueText}</div>
            <div onClick={() => { setSwitcher({...switcher,value: false}) }}>{switcher.falseText}</div>
        </div>
    );
};

export default Switcher;