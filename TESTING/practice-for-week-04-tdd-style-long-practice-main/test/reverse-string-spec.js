// Your code here
const { expect } = require('chai')
const reverseString = require('../problems/reverse-string')

describe('Reverse String Function' , () => {
    it('should reverse the string', () => {
        expect(reverseString('fun')).to.equal('nuf');
    })

    it('should throw a TYPEERROR if input is not a string' , () => {
        expect(() => reverseString(123)).to.throw(TypeError, 'str must be a string');
        expect(() => reverseString({})).to.throw(TypeError, 'str must be a string');
        expect(() => reverseString(null)).to.throw(TypeError, 'str must be a string');
    })
})
