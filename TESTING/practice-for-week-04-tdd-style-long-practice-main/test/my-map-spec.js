// Your code here
const { expect } = require('chai');
const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

const myMap = require('../problems/my-map');

describe('myMap', () => {
    let arr;

    beforeEach(() => {
        arr = [1, 2, 3];
    });

    it('should return a new array where the callback has been called on each element in the original array', () => {
        const callback = (el) => el * 2;
        const result = myMap(arr, callback);

        expect(result).to.deep.equal([2, 4, 6]);
        expect(arr).to.deep.equal([1, 2, 3]);
    });

    it('should not mutate the original array argument', () => {
        const callback = (el) => el * 2;
        myMap(arr, callback);

        expect(arr).to.deep.equal([1, 2, 3]);
    });

    it('should not call the built-in Array.map method', () => {
        const callback = (el) => el * 2;
        chai.spy.on(arr, 'map');
        myMap(arr, callback);

        expect(arr.map).to.not.have.been.called();
    });

    it('should invoke the passed-in callback once for each element in the passed-in array argument', () => {
        const callback = chai.spy((el) => el * 2);
        myMap(arr, callback);


        expect(callback).to.have.been.called.exactly(arr.length);
    });
});
