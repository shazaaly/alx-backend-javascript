const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe('calculateNumber', ()=>{
    it('correctly sums two numbers', ()=>{
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.2), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.2), 4);
        assert.strictEqual(calculateNumber(1.7, 3.8), 5);
        assert.strictEqual(calculateNumber(1, 3), 4);


    })

})