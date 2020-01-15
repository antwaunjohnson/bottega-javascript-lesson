function battingAverage(){
    var hits = 100;
    var atBats = 300;

    return {
        getCurrentAverage: function (){
            return(hits/atBats);
        },

        updateHitsAndAtbats: function(hit, atBat) {
            hits += hit;
            atBats += atBat;
        }
    }
}

var altuve = battingAverage()
console.log(altuve.getCurrentAverage())
altuve.updateHitsAndAtbats(78, 250);
console.log(altuve.getCurrentAverage())