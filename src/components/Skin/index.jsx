import classNames from "classnames";
import React from "react";

import IMG_cards from "./images/cards.jpg";
import IMG_gems from "./images/gems.png";
import IMG_nobles from "./images/nobles.jpg";
import IMG_numbers_sheet from "./images/numbers_sheet.png";
import IMG_oleum_small from "./images/oleum-small.png";
import "../../skins/style.css"


const ASSET = {
    cards: {
        url: IMG_cards,

    }
}

function CardBackground(props) {
    const { className, children: imageId } = props;
    const x = 0;
    const y = 1;
    return (
        <div
            className={classNames(
                `skin card-background-${imageId}`,
                className
            )}
            style={{
                backgroundImage: `url(${IMG_cards})`,
                backgroundOrigin: '0 0',
                backgroundPosition: `${x*100}% ${y*100}%`
            }}
        />
    );
};




function GemSkin(props) {
    const { className, children: gemId } = props;
    return (
        <div
            className={classNames(
                `skin card-background-${gemId}`,
                className
            )}
        />
    );
};


function GemColor(props) {
    const { className, children: gemId } = props;
    return (
        <div
            className={classNames(
                `skin gem-theme-${gemId}`,
                className
            )}
        />
    );
}


export {
    CardBackground,
    GemColor
};
