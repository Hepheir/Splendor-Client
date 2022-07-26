import Sprite from "./Sprite";
import {staticFile} from "../../utils/path";

class CardCoverSprite extends Sprite {
    private static readonly COLUMN_OF: { [key in Level]: number } = {
        1: 0,
        2: 1,
        3: 2,
    }

    private static convertToX(level: Level): number {
        return CardCoverSprite.COLUMN_OF[level];
    }

    public constructor(level: Level) {
        super(
            {
                url: staticFile('/img/cards.webp'),
                width: 1235,
                height: 2058,
            },
            6,
            5,
            5,
            CardCoverSprite.convertToX(level),
        );
    }
}

export default CardCoverSprite;