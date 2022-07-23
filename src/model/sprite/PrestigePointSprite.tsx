import Sprite from "./Sprite";
import {staticFile} from "../../utils/path";

class PrestigePointSprite extends Sprite {
    private static isOverRange(value: number): boolean {
        return value >= 10;
    }

    private static isUnderRange(value: number): boolean {
        return value <= 0;
    }

    private static convertToRow(value: number): number {
        return this.isUnderRange(value) ? 0 : 2;
    }

    private static convertToColumn(value: number): number {
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
            PrestigePointSprite.convertToRow(value),
            PrestigePointSprite.convertToColumn(value),
        );
    }
}

export default PrestigePointSprite;