import Sprite from "./Sprite";
import {staticFile} from "../../utils/path";

type CoinIcon = Bonus;

class CoinIconSprite extends Sprite {
    private static readonly COLUMN_OF: { [key in CoinIcon]: number } = {
        black: 0,
        white: 1,
        blue: 2,
        green: 3,
        red: 4,
    }

    private static convertToColumn(coinIcon: CoinIcon): number {
        return CoinIconSprite.COLUMN_OF[coinIcon];
    }

    public constructor(coinIcon: CoinIcon) {
        super(
            {
                url: staticFile('/img/numbers_sheet.webp'),
                width: 1400,
                height: 417,
            },
            3,
            10,
            1,
            CoinIconSprite.convertToColumn(coinIcon),
        );
    }
}

export default CoinIconSprite;