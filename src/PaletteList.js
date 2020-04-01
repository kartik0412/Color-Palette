import React from "react";
import seedColor from "./seedColor";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
        backgroundColor: "blue",
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        display: "grid",
        width: "100%",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "5%"
    }
};

class PaletteList extends React.Component {
    // constructor() {
    //     super();
    //     this.gotToPalette = this.gotToPalette.bind(this);
    // }
    gotToPalette(id) {
        this.props.history.push(`/palette/${id}`);
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palettes}>
                        {seedColor.map((palette, i) => (
                            <MiniPalette
                                key={i}
                                {...palette}
                                handleClick={() => this.gotToPalette(palette.id)}
                            ></MiniPalette>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);
