import React from "react";
import Palette from "./Palette";
import seedColor from "./seedColor";
import { generate } from "./colorHelper";

function App() {
    return (
        <div className="App">
            <Palette palette={generate({ ...seedColor[4] })} />
        </div>
    );
}

export default App;
