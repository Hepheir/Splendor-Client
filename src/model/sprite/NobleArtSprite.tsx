import Sprite from "./Sprite";
import {staticFile} from "../../utils/path";

type Noble = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

class NobleArtSprite extends Sprite {
    private static convertToRow(noble: Noble): number {
        return Math.floor(noble / 5);
    }

    private static convertToColumn(noble: Noble): number {
        return Math.floor(noble % 5);
    }

    public constructor(noble: Noble) {
        super(
            {
                url: staticFile('/img/nobles.jpeg'),
                width: 1000,
                height: 400,
            },
            2,
            5,
            NobleArtSprite.convertToRow(noble),
            NobleArtSprite.convertToColumn(noble),
        );
    }
}

export default NobleArtSprite;