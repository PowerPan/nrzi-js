/**
 * Created by Johannes Rudolph on 06.01.2017.
 */

var NRZI = function () {};

NRZI.prototype = {

    version: "{{ VERSION }}",

    onBit: function (callback) {
        this._callback = callback;
    },

    calc: function (rxPrevBitNRZI,rxThisBitNRZI) {
        return (!(rxPrevBitNRZI ^ rxThisBitNRZI)) ? 1 : 0;
    },

    addBit: function (thisBit) {
        if(this._callback === undefined)
            throw new Error("NOW CALLBACK SET");
        if(this._prevBit !== undefined){
            var bit = this.calc(this._prevBit,thisBit);
            this._callback(null,bit);
        }

        this._prevBit = thisBit;
    }

};

module.exports = new NRZI();