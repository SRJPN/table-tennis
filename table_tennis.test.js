const { expect } = require("chai")
const { HoursPlayed } = require("./table_tennis")

describe('HoursPlayed', () => {
    it('should run get the hours played for 2 players', () => {
        expect(HoursPlayed(2, [[9,10], [9,12]])).to.be.eql([1, 0]);
    });

    it('should run get the hours played for 4 players', () => {
        expect(HoursPlayed(4, [[9,10], [9,12], [13, 15], [10,18]])).to.be.eql([5, 0]);
    });

    it('should run get the hours played for 7 players', () => {
        expect(HoursPlayed(7, [[9, 11], [12, 14], [13, 15], [11, 18], [14, 18], [10, 14], [15, 18]])).to.be.eql([7, 1]);
    });
})