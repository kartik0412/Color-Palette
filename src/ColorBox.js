import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
                    <CopyToClipboard text={background}>
                        <button className="copy-button">Copy</button>
                    </CopyToClipboard>
                </div>
                <span className="see-more"> MORE </span>
            </div>
        );
    }
}

export default ColorBox;
