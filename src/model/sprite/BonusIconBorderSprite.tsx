import Sprite from "./Sprite";
import {staticFile} from "../../utils/path";

class BonusIconBorderSprite extends Sprite {
    public constructor() {
        super(
            {
                url: staticFile('/img/numbers_sheet.webp'),
                width: 1400,
                height: 417,
            },
            3,
            10,
            0,
            5,
        );
    }
}

export default BonusIconBorderSprite;