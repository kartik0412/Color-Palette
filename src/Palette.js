import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
class Palette extends React.Component {
    render() {
        const colors = this.props.colors.map(color => (
            <ColorBox key={color.name} name={color.name} background={color.color} />
        ));

        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <div className="Palette-colors">{colors}</div>
                {/* footer goes here */}
            </div>
        );
    }
}

export default Palette;
