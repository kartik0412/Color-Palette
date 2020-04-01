import React from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";

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
        let { colors } = this.props.palette;
        let { level } = this.state;
        const color = colors[level].map(color => <ColorBox key={color.name} name={color.name} background={color.hex} />);

        return (
            <div className="Palette">
                {/* Navbar goes here */}
                <div className="slider">
                    <Slider min={100} max={900} step={100} defaultValue={level} onAfterChange={this.sliderChange} />
                </div>
                <div className="Palette-colors">{color}</div>
                {/* footer goes here */}
            </div>
        );
    }
}

export default Palette;
