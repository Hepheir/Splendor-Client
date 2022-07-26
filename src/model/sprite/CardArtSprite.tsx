import Sprite from "./Sprite";
import {staticFile} from "../../utils/path";

type Color = Bonus;
type Arg = 0 | 1 | 2 | 3 | 4;

class CardArtSprite extends Sprite {
    private static readonly ROW_OF: { [key in Color]: number } = {
        blue: 0,
        black: 1,
        red: 2,
        green: 3,
        white: 4,
    }

    private static convertToY(color: Color): number {
        return CardArtSprite.ROW_OF[color];
    }

    private static convertToX(arg: Arg): number {
        return arg;
    }

    public constructor(color: Color, arg: Arg) {
        super(
            {
                url: staticFile('/img/cards.webp'),
                width: 1235,
                height: 2058,
            },
            6,
            5,
            CardArtSprite.convertToY(color),
            CardArtSprite.convertToX(arg),
        );
    }
}

export default CardArtSprite;