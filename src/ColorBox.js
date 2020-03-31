import React from "react";
import "./ColorBox.css";
class ColorBox extends React.Component {
    render() {
        return (
            <div style={{ backgroundColor: `${this.props.background}` }} className="ColorBox">
                <span>{this.props.name}</span>
                <span> More </span>
            </div>
        );
    }
}

export default ColorBox;