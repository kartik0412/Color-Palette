import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import "./ColorBox.css";
class ColorBox extends React.Component {
    constructor() {
        super();
        this.state = {
            copied: false
        };
        this.handleCopy = this.handleCopy.bind(this);
    }

    handleCopy() {
        this.setState(
            {
                copied: true
            },
            () => setTimeout(() => this.setState({ copied: false }), 1000)
        );
    }

    render() {
        const { background, name } = this.props;
        const copied = this.state.copied;
        return (
            <div style={{ background }} className="ColorBox">
                <div style={{ background }} className={`copy-overlay ${copied && "show"}`} />
                <div className="copy-container">
                    <div className="box-container">
                        <span>{name}</span>
                    </div>
                    <CopyToClipboard text={background} onCopy={this.handleCopy}>
                        <button className="copy-button">Copy</button>
                    </CopyToClipboard>
                    <div className={`show-message ${copied && "show"}`}>
                        <h1>Copied!!</h1>
                        <p>{background}</p>
                    </div>
                </div>

                <span className="see-more"> MORE </span>
            </div>
        );
    }
}

export default ColorBox;
