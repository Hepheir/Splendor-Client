import React from "react";
import Sprite from "./Sprite";
import {toPixel} from "../../utils/css";

class SpriteCSS {
    constructor(private readonly sprite: Sprite,
                private readonly width: number,
                private readonly height: number) {}

    public getCSS(): React.CSSProperties {
        return {
            width: this.getWidth(),
            height: this.getHeight(),
            backgroundImage: this.getBackgroundImage(),
            backgroundSize: this.getBackgroundSize(),
            backgroundPosition: this.getBackgroundPosition(),
        }
    }

    public getWidth(): string {
        return toPixel(this.width);
    }

    public getHeight(): string {
        return toPixel(this.height);
    }

    public getBackgroundImage(): string {
        return `url(${this.sprite.image.url})`;
    }

    public getBackgroundPosition(): string {
        return `${this.getBackgroundPositionX()} ${this.getBackgroundPositionY()}`
    }

    public getBackgroundPositionX(): string {
        return toPixel(-this.sprite.x * this.width);
    }

    public getBackgroundPositionY(): string {
        return toPixel(-this.sprite.y * this.height);
    }

    public getBackgroundSize(): string {
        return `${this.getBackgroundSizeX()} ${this.getBackgroundSizeY()}`
    }

    public getBackgroundSizeX(): string {
        return toPixel(this.width * this.sprite.columns);
    }

    public getBackgroundSizeY(): string {
        return toPixel(this.height * this.sprite.rows);
    }
}

export default SpriteCSS;
