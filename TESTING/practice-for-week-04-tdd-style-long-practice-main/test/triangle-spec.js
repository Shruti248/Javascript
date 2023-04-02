// Your code here

const { expect } = require('chai')

const { Person } = require('../problems/triangle');

describe('Person', () => {
  let person1;
  let person2;

  beforeEach(() => {
    person1 = new Person('Mai', 32);
    person2 = new Person('Erin', 27);
  });

  describe('constructor', () => {
    it('should set the name and age properties on the instance', () => {
      expect(person1).to.have.property('name', 'Mai');
      expect(person1).to.have.property('age', 32);
    });
  });

  describe('sayHello', () => {
    it('should return a string of the Person instance\'s name and a greeting message', () => {
      expect(person1.sayHello()).to.equal('Mai says hello!');
    });
  });

  describe('visit', () => {
    it('should return a string stating that this instance visited the passed-in person instance', () => {
      expect(person1.visit(person2)).to.equal('Mai visited Erin');
    });
  });

  describe('greetAll', () => {
    it('should return an array of strings returned by the sayHello method of each Person instance in the input array', () => {
      const people = [person1, person2];
      const result = Person.greetAll(people);

      expect(result).to.deep.equal(['Mai says hello!', 'Erin says hello!']);
    });
  });
});
