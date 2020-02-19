const index = require('../index.js');
const expect = require('chai').expect;

describe('sort function'), () => {
  it('should return an array of numbers sorted by ascending order', () => {
    expect(arr1).to.deep.equal(arr2)
    let i = 0, sorted=true;
    while(sorted && i < arr.length -1) {
      sorted = sorted && arr1[i] < arr2[i + 1];
      i++;
    }
    expect(sorted).to.be.true;
  });
};
//   it('should return an array of numbers');
