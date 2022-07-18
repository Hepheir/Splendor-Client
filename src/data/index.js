import CARDS from "./cards.json";
import CARDCOSTS from "./card.costs.json";
import TILES from "./tiles.json";
import TILECOSTS from "./tile.costs.json";
import COINS from "./coins.json";


function getCard(cardId) {
    return CARDS.find(card => card.id === cardId);
}


function getCardcost(cardId) {
    return CARDCOSTS.find(cardcost => cardcost.card_id === cardId);
}


function getTile(tileId) {
    return TILES.find(tile => tile.id === tileId);
}


function getTilecost(tileId) {
    return TILECOSTS.find(tilecost => tilecost.id === tileId);
}


function getCoin(coinId) {
    return COINS.find(coin => coin.id === coinId);
}


export {
    getCard,
    getCardcost,
    getTile,
    getTilecost,
    getCoin,
};
