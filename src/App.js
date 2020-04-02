import React from "react";
import Palette from "./Palette";
import SinglePalette from "./SinglePalette";
import seedColor from "./seedColor";
import { generate } from "./colorHelper";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";

class App extends React.Component {
    findPalette(id) {
        return seedColor.find(function(palette) {
            return palette.id === id;
        });
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" render={routeProps => <PaletteList {...routeProps} />} />
                <Route
                    exact
                    path="/palette/:id"
                    render={routeProps => <Palette palette={generate(this.findPalette(routeProps.match.params.id))} />}
                />
                <Route
                    exact
                    path="/palette/:paletteId/:id"
                    render={routeProps => (
                        <SinglePalette
                            colors={generate(this.findPalette(routeProps.match.params.paletteId)).colors}
                            id={routeProps.match.params.id}
                        />
                    )}
                />
            </Switch>
        );
    }
}

export default App;
