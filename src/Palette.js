import React from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";

class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        };
        this.sliderChange = this.sliderChange.bind(this);
        this.handleFormat = this.handleFormat.bind(this);
    }

    sliderChange(level) {
        this.setState({
            level: level
        });
    }

    handleFormat(format) {
        this.setState({
            format
        });
    }

    render() {
        let { colors } = this.props.palette;
        let { level, format } = this.state;
        const color = colors[level].map(color => <ColorBox key={color.name} name={color.name} background={color[format]} />);

        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <Navbar level={level} format={format} handleFormat={this.handleFormat} sliderChange={this.sliderChange} />
                <div className="Palette-colors">{color}</div>
                {/* footer goes here */}
            </div>
        );
    }
}

export default Palette;
