import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

class Navbar extends React.Component {
    render() {
        const { level, sliderChange } = this.props;

        return (
            <header className="navbar">
                <div className="logo">
                    <a href="#">reactcolorPicker</a>
                </div>
                <div className="slider-container">
                    <span>Level : {level}</span>
                    <div className="slider">
                        <Slider min={100} max={900} step={100} defaultValue={level} onAfterChange={sliderChange} />
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;
