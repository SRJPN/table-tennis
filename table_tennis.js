var HoursPlayed = (numberOfPlayers, playerTimings) => {
    var playersAvailableAtHours =
        playerTimings.reduce((agg, [startTime, endTime]) => {
            GenerateValuesBetween(startTime, endTime).forEach(x => {agg[x] = agg[x] ? agg[x] + 1 : 1})
            return agg;
        }, {});

    var result = Object.values(playersAvailableAtHours).reduce(([numberOfHoursSingles, numberOfHoursDoubles], x) => {
        if (1 < x && x < 4)
            return [numberOfHoursSingles + 1, numberOfHoursDoubles]
        if (4 <= x)
            return [numberOfHoursSingles, numberOfHoursDoubles + 1]
        return [numberOfHoursSingles, numberOfHoursDoubles]
    }, [0, 0])
    return result;
}

exports.HoursPlayed = HoursPlayed;

function GenerateValuesBetween(startTime, endTime) {
    return Array.from({ length: endTime - startTime }, (v, k) => k + startTime);
}
