import React from "react";
import { Link } from "react-router-dom";
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
        const { background, name, paletteId, id } = this.props;
        const copied = this.state.copied;
        return (
            <div style={{ background }} className={`${this.props.toShow === false ? "SinglePalette ColorBox" : "ColorBox"}`}>
                <div style={{ background }} className={`${copied ? "copy-overlay show" : "copy-overlay"}`} />
                <div className="copy-container">
                    <div className="box-container">
                        <span>{name}</span>
                    </div>
                    <CopyToClipboard text={background} onCopy={this.handleCopy}>
                        <button className="copy-button">Copy</button>
                    </CopyToClipboard>
                    <div className={`${copied ? "show-message show" : "show-message"}`}>
                        <h1>Copied!!</h1>
                        <p>{background}</p>
                    </div>
                </div>
                {this.props.toShow && (
                    <Link exact to={`/palette/${paletteId}/${id}`}>
                        <span className="see-more"> MORE </span>
                    </Link>
                )}
            </div>
        );
    }
}

export default ColorBox;
