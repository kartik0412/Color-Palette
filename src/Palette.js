import React from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class Palette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        };
        this.sliderChange = this.sliderChange.bind(this);
    }

    sliderChange(level) {
        this.setState({
            level: level
        });
    }

    render() {
        const colors = this.props.palette.colors[this.state.level].map(color => (
            <ColorBox key={color.name} name={color.name} background={color.hex} />
        ));

        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <Slider min={100} max={900} step={100} defaultValue={this.state.level} onAfterChange={this.sliderChange} />
                <div className="Palette-colors">{colors}</div>
                {/* footer goes here */}
            </div>
        );
    }
}

export default Palette;
