import React from "react";


import {
    CardBackground,
    GemColor
} from "../../components/Skin";
import "./style.css";


class Main extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="main">
                <CardBackground>{1}</CardBackground>
                <GemColor>{2}</GemColor>
            </div>
        );
    }
}

export default Main;
