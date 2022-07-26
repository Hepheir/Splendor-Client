import React from "react";
import CardArtSprite from "../../../model/sprite/CardArtSprite";
import CardHeader from "./CardHeader";
import CardCost from "./CardCost";
import SpriteCSS from "../../../model/sprite/SpriteCSS";
import {toPixel} from "../../../utils/css";

interface CardViewProps {
    card: DevelopmentCard;
}

class Card extends React.Component<CardViewProps> {
    public render(): React.ReactNode {
        const {score, bonus, cost} = this.props.card;
        const sprite = new CardArtSprite(bonus, 0);
        const spriteCSS = new SpriteCSS(sprite, 100, 140);
        return (
            <div style={{
                boxSizing: "border-box",
                position: "relative",

                padding: toPixel(4),
                paddingTop: toPixel(40),

                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column-reverse",
                gap: toPixel(3),

                ...Card.getCardCSS(),
                ...spriteCSS.getCSS(),
            }}>
                <CardHeader score={score} bonus={bonus} />
                <CardCost color="red" amount={cost['red']}/>
                <CardCost color="blue" amount={cost['blue']}/>
                <CardCost color="green" amount={cost['green']}/>
                <CardCost color="white" amount={cost['white']}/>
                <CardCost color="black" amount={cost['black']}/>
            </div>
        )
    }

    private static getCardCSS(): React.CSSProperties {
        return {
            boxShadow: "0 0 3px rgba(0, 0, 0, .85)",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgba(0,0,0,1)",
            borderRadius: "8px",

            overflow: "hidden",
        }
    }
}

export default Card;
