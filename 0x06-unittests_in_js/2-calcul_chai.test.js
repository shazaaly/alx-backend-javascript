const expect = require('chai').expect;
const calculateNumber = require("./2-calcul_chai");


describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
      const res = calculateNumber("SUM", 1, 2);
      expect(res, 3);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("SUBTRACT", 1.4, 2.2);
      expect(res, -1);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("SUBTRACT", 4.9, 2.7);
      expect(res, 2);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("DIVIDE", 4, 2);
      expect(res, 2);
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("DIVIDE", 1.7, 0);
      expect(res, "Error");
    });
    it(`checking if numbers round`, function() {
      const res = calculateNumber("DIVIDE", 1.4, 4.6);
      expect(res, 0.2);
    });
});