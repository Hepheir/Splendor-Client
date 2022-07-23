type Coin = "red" | "blue" | "green" | "black" | "white" | "yellow";
type Bonus = "red" | "blue" | "green" | "black" | "white";
type Level = 1 | 2 | 3;
type Bonuses = {[key in Bonuses]: number };
type Coins = {[key in Coin]: number };

interface NobleTile {
    score: number;
    cost: Bonuses;
}

interface DevelopmentCard {
    score: number;
    level: Level;
    bonus: Bonus;
    cost: Bonuses;
}

interface Supply {
    tiles: NobleTile[];
    card_deck: { [key in Level]: number };
    revealed_cards: { [key in Level]: DevelopmentCard[] };
    coins: Coins;
}

interface Player {
    name: string;
    score: number;
    bonuses: Bonuses;
    coins: Coins;
    cards: DevelopmentCard[];
    tiles: NobleTile[];
}
