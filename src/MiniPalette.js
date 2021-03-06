import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        positin: "relative",
        overflow: "hidden",
        "&:hover": {
            cursor: "pointer"
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: "100px",
        width: "100%",
        borderRadius: "5px",
        overflow: "hidden"
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "0.8rem",
        position: "relative"
    },
    emoji: {
        marinLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColors: {
        width: "25%",
        height: "20%",
        marginBottom: "-3.5px",
        margin: "0 auto",
        display: "inline-block",
        position: "relative"
    }
};

function MiniPalette(props) {
    const { classes, paletteName, colors, emoji } = props;
    const minicolorbox = colors.map(color => (
        <div className={classes.miniColors} style={{ backgroundColor: color.color }} key={color.name}></div>
    ));
    return (
        <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>{minicolorbox}</div>
            <h5 className={classes.title}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);
