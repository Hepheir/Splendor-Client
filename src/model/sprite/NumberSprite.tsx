import Sprite from "./Sprite";
import {staticFile} from "../../utils/path";

class NumberSprite extends Sprite {
    private static isOverRange(value: number): boolean {
        return value >= 10;
    }

    private static isUnderRange(value: number): boolean {
        return value <= 0;
    }

    private static convertToY(value: number): number {
        return this.isUnderRange(value) ? 0 : 2;
    }

    private static convertToX(value: number): number {
        return (this.isUnderRange(value) || this.isOverRange(value)) ? 9 : value - 1;
    }

    public constructor(value: number) {
        super(
            {
                url: staticFile('/img/numbers_sheet.webp'),
                width: 1400,
                height: 417,
            },
            3,
            10,
            NumberSprite.convertToY(value),
            NumberSprite.convertToX(value),
        );
    }
}

export default NumberSprite;