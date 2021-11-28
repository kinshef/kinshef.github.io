import data from "./data";
import Path from "./companents/Path";
import {useState} from "react";

function App() {
    const [stepIds, setStepIds] = useState([0]);
    return (
        <div className="App">
            <div className="content">
                <Path title='Главная' parentId={0} parentIds={[]} id={0} path={data} stepIds={stepIds} setStepIds={setStepIds} />
            </div>
            <div className="nav">
                <button type='button' onClick={() => stepIds.length > 1 ? setStepIds(stepIds.slice(0,-1)) : null}>prev</button>
            </div>
        </div>
    );
}

export default App;
