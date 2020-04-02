import React from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./SinglePalette.css";
import "./ColorBox.css";

class SinglePalette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            colors: this.generateArray(this.props.colors, this.props.id)
        };
        this.handleFormat = this.handleFormat.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    handleFormat(format) {
        this.setState({
            format
        });
    }

    generateArray(colors, id) {
        let color = [];
        for (let i = 100; i <= 900; i += 100) {
            for (let j = 0; j < colors[i].length; j++) {
                if (colors[i][j].id === id) {
                    color.push(colors[i][j]);
                    console.log(colors[i][j]);
                }
            }
        }
        return color;
    }

    handleGoBack() {
        console.log("go back");
        window.history.back();
    }

    render() {
        const { format, colors } = this.state;

        let colorsBox = colors.map(color => (
            <ColorBox key={color.name} name={color.name} background={color[format]} id={color.id} toShow={false} />
        ));

        return (
            <div className="Single-Palette">
                <Navbar toShow={false} format={format} handleFormat={this.handleFormat} />
                <div className="SinglePalette-colors">
                    {colorsBox}
                    <div className="goback">
                        <div className="goback-box-container">
                            <button onClick={this.handleGoBack} className="goback-button">
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
                <footer className="SinglePalette-footer">{this.props.id}</footer>
            </div>
        );
    }
}

export default SinglePalette;
