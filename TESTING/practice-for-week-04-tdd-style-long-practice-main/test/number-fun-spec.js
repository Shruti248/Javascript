const { expect } = require('chai')
const { returnsThree, reciprocal } = require('../problems/number-fun')

describe('Function returnsThreee', () => {
    it('should Return 3' , () => {
        expect(returnsThree()).to.equal(3);
    })

})

describe('Function reciprocal', () => {
    it('should return the reciprocal of the given argument', () => {
        expect(reciprocal(2)).to.equal(0.5);
      });

      it('should throw a TypeError if the argument is not between 1 and 1000000', () => {
        expect(() => reciprocal(-1)).to.throw(TypeError, 'Argument must be between 1 and 1000000');
        expect(() => reciprocal(0)).to.throw(TypeError, 'Argument must be between 1 and 1000000');
        expect(() => reciprocal(10000001)).to.throw(TypeError, 'Argument must be between 1 and 1000000');
      });
})
