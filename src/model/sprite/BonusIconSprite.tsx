import Sprite from "./Sprite";
import {staticFile} from "../../utils/path";

type BonusIcon = Bonus;

class BonusIconSprite extends Sprite {
    private static readonly COLUMN_OF: { [key in BonusIcon]: number } = {
        black: 0,
        white: 1,
        blue: 2,
        green: 3,
        red: 4,
    }

    private static convertToColumn(bonusIcon: BonusIcon): number {
        return BonusIconSprite.COLUMN_OF[bonusIcon];
    }

    public constructor(bonusIcon: BonusIcon) {
        super(
            {
                url: staticFile('/img/numbers_sheet.webp'),
                width: 1400,
                height: 417,
            },
            3,
            10,
            0,
            BonusIconSprite.convertToColumn(bonusIcon),
        );
    }
}

export default BonusIconSprite;