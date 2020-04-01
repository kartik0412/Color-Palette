import React from "react";
import Palette from "./Palette";
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
                <Route exact path="/" render={() => <PaletteList />}></Route>
                <Route
                    exact
                    path="/palette/:id"
                    render={routeProps => <Palette palette={generate(this.findPalette(routeProps.match.params.id))} />}
                ></Route>
            </Switch>
        );
    }
}

export default App;
