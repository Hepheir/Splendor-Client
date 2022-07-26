import Sprite from "./Sprite";
import {staticFile} from "../../utils/path";

type Color = Coin;

class GemTokenSprite extends Sprite {
    private static readonly COLUMN_OF: { [key in Color]: number } = {
        white: 0,
        blue: 1,
        black: 2,
        red: 3,
        green: 4,
        yellow: 5,
    }

    private static convertToX(color: Color): number {
        return GemTokenSprite.COLUMN_OF[color];
    }

    public constructor(color: Color) {
        super(
            {
                url: staticFile('/img/tokens.webp'),
                width: 1218,
                height: 182,
            },
            1,
            6,
            0,
            GemTokenSprite.convertToX(color),
        );
    }
}

export default GemTokenSprite;