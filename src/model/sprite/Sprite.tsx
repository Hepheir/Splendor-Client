import Image from "./Image";

class Sprite {
    public readonly image: Image;
    public readonly rows: number;
    public readonly columns: number;
    public readonly width: number;
    public readonly height: number;
    public y: number;
    public x: number;

    constructor(image: Image, rows: number, columns: number, y?: number, x?: number) {
        this.image = image;
        this.rows = rows;
        this.columns = columns;
        this.y = y || 0;
        this.x = x || 0;
        this.width = image.width / columns;
        this.height = image.height / rows;
    }
}

export default Sprite;
