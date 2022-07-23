import Sprite from "./Sprite";
import {staticFile} from "../../utils/path";

type Color = Bonus;

class GemSprite extends Sprite {
    private static readonly COLUMN_OF: { [key in Color]: number } = {
        white: 0,
        blue: 1,
        black: 2,
        red: 3,
        green: 4,
    }

    private static convertColorToColumn(color: Color): number {
        return GemSprite.COLUMN_OF[color];
    }

    public constructor(color: Color) {
        super(
            {
                url: staticFile('/img/gems.webp'),
                width: 950,
                height: 168,
            },
            1,
            5,
            0,
            GemSprite.convertColorToColumn(color),
        );
    }
}

export default GemSprite;