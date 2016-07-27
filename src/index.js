var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');
var getRandomItem = uniqueRandomArray(starWarsNames);
var _ = require('lodash');

module.exports = {
    all: starWarsNames,
    random: random,
    randomArrayWithoutRepeat: randomArrayWithoutRepeat
};

function random(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}

function randomArrayWithoutRepeat(number) {
    if (number > starWarsNames.length) {
        return _.uniq(starWarsNames.all);
    }
    var randomItems = [];
    do {
        randomItems.push(getRandomItem());
        randomItems = _.uniq(randomItems);
    } while(randomItems.length < number );
    return randomItems;
}