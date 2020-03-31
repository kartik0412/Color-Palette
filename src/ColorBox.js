import React from "react";
import "./ColorBox.css";
class ColorBox extends React.Component {
    render() {
        const { background, name } = this.props;
        return (
            <div style={{ background }} className="ColorBox">
                <div className="copy-container">
                    <div className="box-container">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                <span className="see-more"> MORE </span>
            </div>
        );
    }
}

export default ColorBox;
