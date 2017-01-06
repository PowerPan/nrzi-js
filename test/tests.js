/**
 * Created by Johannes Rudolph on 06.01.2017.
 */

var assert = require('assert');
var nrzi = require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../dist/') + 'nrzi');

describe('Test NRZI Decoding', function () {
    it("should produce a 1 if input is 00",function () {
        //Setup
        var input      = [0,0];

        //Execution
        var result = nrzi.calc(input[0],input[1]);

        //Result
        var expected  = 1;
        assert.equal(result, expected);
    });

    it("should produce a 1 if input is 11",function () {
        //Setup
        var input      = [1,1];

        //Execution
        var result = nrzi.calc(input[0],input[1]);

        //Result
        var expected = 1;
        assert.equal(result, expected);
    });

    it("should produce a 0 if input is 10",function () {
        //Setup
        var input      = [1,0];

        //Execution
        var result = nrzi.calc(input[0],input[1]);

        //Result
        var expected = 0;
        assert.equal(result, expected);
    });

    it("should produce a 0 if input is 01",function () {
        //Setup
        var input      = [0,1];

        //Execution
        var result = nrzi.calc(input[0],input[1]);

        //Result
        var expected = 0;
        assert.equal(result, expected);
    });
});

describe('Test Decoding Machine', function () {
    it("should produce a 1 if input is 00",function () {
        //Setup
        delete(nrzi._prevBit);
        delete(nrzi._callback);
        var input = [1,1];


        nrzi.onBit(function (err,bit) {
            checkResult(bit);
        });

        //Execution
        for(var i = 0; i < input.length; i++){
            nrzi.addBit(input[i])
        }
        //Result
        function checkResult(result) {
            var expected = 1;
            assert.equal(result, expected);
        }
    });

    it("should produce a 1 if input is 11",function () {
        //Setup
        delete(nrzi._prevBit);
        delete(nrzi._callback);
        var input = [1,1];


        nrzi.onBit(function (err,bit) {
            checkResult(bit);
        });

        //Execution
        for(var i = 0; i < input.length; i++){
            nrzi.addBit(input[i])
        }
        //Result
        function checkResult(result) {
            var expected = 1;
            assert.equal(result, expected);
        }
    });

    it("should produce a 0 if input is 10",function () {
        //Setup
        delete(nrzi._prevBit);
        delete(nrzi._callback);
        var input = [1,0];


        nrzi.onBit(function (err,bit) {
            checkResult(bit);
        });

        //Execution
        for(var i = 0; i < input.length; i++){
            nrzi.addBit(input[i])
        }
        //Result
        function checkResult(result) {
            var expected = 0;
            assert.equal(result, expected);
        }
    });

    it("should produce a 0 if input is 01",function () {
        //Setup
        delete(nrzi._prevBit);
        delete(nrzi._callback);
        var input = [0,1];


        nrzi.onBit(function (err,bit) {
            checkResult(bit);
        });

        //Execution
        for(var i = 0; i < input.length; i++){
            nrzi.addBit(input[i])
        }
        //Result
        function checkResult(result) {
            var expected = 0;
            assert.equal(result, expected);
        }
    });

    it("should produce a Error NOW CALLBACK SET",function () {
        //Setup
        delete(nrzi._prevBit);
        delete(nrzi._callback);
        var input = [0,1];


        //Execution
        assert.throws(function () {
            for(var i = 0; i < input.length; i++){
                nrzi.addBit(input[i])
            }
        },"NOW CALLBACK SET")


    });


});