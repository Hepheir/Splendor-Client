import React from "react";
import NumberSprite from "../../../model/sprite/NumberSprite";
import CoinIconSprite from "../../../model/sprite/CoinIconSprite";
import SpriteCSS from "../../../model/sprite/SpriteCSS";

interface CardCostProps {
    color: Bonus;
    amount: number;
}

class CardCost extends React.Component<CardCostProps> {
    public render(): React.ReactNode {
        const {color, amount} = this.props;
        if (amount === 0) {
            return null;
        }
        const size = 20;
        return (
            <div style={{
                flexShrink: 0,
                flexGrow: 0,
                ...CardCost.getBackgroundSpriteCSS(size, color),
            }}>
                <div style={CardCost.getNumberSpriteCSS(size, amount)} />
            </div>
        )
    }

    private static getBackgroundSpriteCSS(spriteSize: number, color: Bonus): React.CSSProperties {
        const backgroundSprite = new CoinIconSprite(color);
        const backgroundSpriteCSS = new SpriteCSS(backgroundSprite, spriteSize, spriteSize);
        return backgroundSpriteCSS.getCSS();
    }

    private static getNumberSpriteCSS(spriteSize: number, amount: number): React.CSSProperties {
        const numberSprite = new NumberSprite(amount);
        const numberSpriteCSS = new SpriteCSS(numberSprite, spriteSize, spriteSize);
        return numberSpriteCSS.getCSS();
    }
}

export default CardCost;
