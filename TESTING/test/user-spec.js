const { expect } = require('chai')
const User = require('../class/user')


describe('User Class', () => {

    let user;

    // Mocha Hooks : To VAoid Repeation =---> BeforeEach , Before , AfterEach , After
    beforeEach(() => {
        user = new User('John Doe')
    })

    it('should create user successfully', () => {
        expect(user).to.exist;
    })

    it('should set username on creation', () => {
        expect(user.username).to.equal('John Doe')
    })
})
