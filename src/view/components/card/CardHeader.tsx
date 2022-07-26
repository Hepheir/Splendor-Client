import React from "react";
import {toPixel} from "../../../utils/css";
import NumberSprite from "../../../model/sprite/NumberSprite";
import GemSprite from "../../../model/sprite/GemSprite";
import SpriteCSS from "../../../model/sprite/SpriteCSS";

interface CardHeaderProps {
    score: number;
    bonus: Bonus;
}

class CardHeader extends React.Component<CardHeaderProps> {
    public render(): React.ReactNode {
        const {score, bonus} = this.props;
        return (
            <div className="card-header" style={{
                width: '100%',
                height: toPixel(36),
                padding: '0 4px',

                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                position: "absolute",
                top: 0,
                left: 0,

                backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}>
                <div style={CardHeader.getScoreSpriteCSS(30, score)}/>
                <div style={CardHeader.getBonusSpriteCSS(30, bonus)}/>
            </div>
        )
    }

    private static getScoreSpriteCSS(spriteSize: number, score: number): React.CSSProperties {
        const sprite = new NumberSprite(score);
        const spriteCSS = new SpriteCSS(sprite, spriteSize, spriteSize);
        return spriteCSS.getCSS();
    }

    private static getBonusSpriteCSS(spriteSize: number, color: Bonus): React.CSSProperties {
        const sprite = new GemSprite(color);
        const spriteCSS = new SpriteCSS(sprite, spriteSize-2, spriteSize-6);
        return spriteCSS.getCSS();
    }
}

export default CardHeader;
