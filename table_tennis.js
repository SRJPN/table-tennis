const TABLE_START_TIME = 9;
const TABLE_END_TIME = 18;

var HoursPlayed = (numberOfPlayers, playerTimings) => {
    var numberOfHoursSingles = 0;
    var numberOfHoursDouble = 0;


    for (var i = TABLE_START_TIME; i < TABLE_END_TIME; i++) {
        var numberOfPLayersAvailable = playerTimings.reduce((agg, [startTime, endTime]) => {
            if (i >= startTime && i < endTime) {
                return agg + 1;
            }
            return agg;
        }, 0);

        if (numberOfPLayersAvailable > 1 && numberOfPLayersAvailable < 4)
            numberOfHoursSingles++
        if (numberOfPLayersAvailable >= 4)
            numberOfHoursDouble++
    }
    return [numberOfHoursSingles, numberOfHoursDouble]
}

exports.HoursPlayed = HoursPlayed;