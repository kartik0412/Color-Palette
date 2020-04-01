import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import "./Navbar.css";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.props.handleFormat(evt.target.value);
    }

    render() {
        const { level, sliderChange } = this.props;

        return (
            <header className="navbar">
                <div className="logo">
                    <a href="/">reactcolorPicker</a>
                </div>
                <div className="slider-container">
                    <span>Level : {level}</span>
                    <div className="slider">
                        <Slider min={100} max={900} step={100} defaultValue={level} onAfterChange={sliderChange} />
                    </div>
                </div>
                <div className="select-container">
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.props.format}
                        onChange={this.handleChange}
                    >
                        <MenuItem value="hex">HEX</MenuItem>
                        <MenuItem value="rgb">RGB</MenuItem>
                        <MenuItem value="rgba">RGBA</MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}

export default Navbar;
