import React from "react";
import seedColor from "./seedColor";
import { Link } from "react-router-dom";

class PaletteList extends React.Component {
    render() {
        return (
            <div>
                <h1>React Colors</h1>
                {seedColor.map(palette => (
                    <p>
                        <Link exact to={`/palette/${palette.id}`}>
                            {palette.paletteName}
                        </Link>
                    </p>
                ))}
            </div>
        );
    }
}

export default PaletteList;
