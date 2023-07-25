// OOPS : Type of Programming Paragim (Other Procedural(top to down) , functional (Pure FUnctions are used (functions taht do not change the state outside the functions =--- That is immutable)))

// SCripting Languages : Automate the Task , Does not compile , executes code line by line one line at a time , This is teh high level language which is converted to low level languages first(in the form of 0s and 1s) so that the computer understands

// 2 types : Server Sode(Node , Python , Ruby , Perl) , client Side(JS , HTML , CSS , TS)

// OOP : COmplex mechanicesm are hidden in the class , the things required to be accessed to a outside world is provided  -- No Need to worry about logic -- 1 feature (Abstraction) -- More features also

// COnstructor Function : First Letter Capital (Naming convention) --> make object of this later

// Behind the function -- classes also create this constructor function only
function BankAccount(customerName, balance = 0) {

    // this : current Object
    // Properties
    this.customerName = customerName;
    this.accountNumber = Date.now(); //Timestamp
    this.balance = balance;

    // Methods
    this.deposit = function (amount) {
        this.balance += amount;
    }

    this.withdraw = function (amount) {
        this.balance -= amount;
    }
}
// Object
// For each object -- Diff memory Space -- does not affect each other
const rakeshAccount = new BankAccount("Rakesh K", 1000);
const johnAccount = new BankAccount("John Doe", 1000);

// rakeshAccount.balance = 2000;

rakeshAccount.deposit(2000);
rakeshAccount.withdraw(1000);

console.log(rakeshAccount);
console.log(johnAccount);

// Built in JS Objects with initial Values
// const a = new String(); Empty
// const a = new Number(); //Zero
// const a = new Boolean(); //false
// const a = new Object(); //Empty
// const a = new Array(); //Empty
// const a = new RegExp(); ///(?:)/
// const a = new Function(); //anonymous function
// const a = new Date(); //Current Date

// The Math() object is not in the list. Math is a global object. The new keyword cannot be used on Math.
const a = Math.abs(-1); //Current Date

console.log(a);


// Prototype in JS

// Since each object has its own memory space -- so each variable and each function is also assigned memory inside each object

// When Creating multiple Objects -- We allocate multiple memory spaces for functions which have the exact same implementation --- To remove this

// we allocate some common spaces to function to avoid repeation of code in diff memory spaces -- use it iniside each object when needed

// In JS ; Function is a object

// Functions can have Properties and Methods: As shown in the example above, you can add properties and methods to a function, just like you would with a regular object.

// Functions have a Prototype: Functions also have a prototype, which is an object that contains properties and methods that can be shared by all instances created using that function as a constructor.

console.log('------------');
console.log(BankAccount.prototype);  //{}

// Whenever the function is created , JS Adds a property always -- prototype(property)

// prototype : {}
// Adding values
BankAccount.prototype.name = "Shruti Unadkat";

// Adding function
BankAccount.prototype.howYouDoing = function (name) {
    console.log(`Hey ${name} ! How You Doin'`);
}

// The above method not in instances --- stored in prototype

// JS first finds the method in the constructor -- If found , return from there
// If not -- Searches in prototype -- if present then return from there
// If Not found in that step : goes to its prototype

// This is how the prototype chain works
console.log(rakeshAccount.howYouDoing('Mon'));
// console.log(rakeshAccount.howYouDoing('Rach'));

// Memory Problem solved : Mthod created only oce for each object instances

// Eg : Array COnstructor : All the methods found in array : Found in Array Prototype

const arr = new Array();
console.log(Array.prototype);  // in Browser

// All JavaScript objects inherit properties and methods from a prototype.

// Classes
// Above we created the object using constructor function
// Now doing it with classes

// Class is just the syntactic sugar for JS : Under the hood always the above constructor function is made

// class : ES6

class BankAccountClass {
    customerName;
    accountNumber;
    balance;

    // Intializing the class when obj is created
    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    // In above -- We explicitly added the methods to prototype
    // But this is automatically added to the prototype only -- Saving the space -- Woahhhh
    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }
}

const shrutiAcc = new BankAccountClass("shruti", 1000);
shrutiAcc.deposit(2000)
console.log(shrutiAcc);

// With classes : Hoisting Does not WORK
// With function : HOISTING Works

// this syntax Also works -- classes assigned as varibles
const className = class {

}


// The reason typeof class returns "function" is due to the fact that in ECMAScript 6 (ES6) and later versions of JavaScript, the class keyword was introduced to provide a more convenient and declarative syntax for creating constructor functions and managing prototypes.

// However, at its core, a class in JavaScript is just a special type of function. It is a syntactical sugar on top of the existing prototype-based inheritance model of JavaScript. The class syntax provides a more familiar and structured way to define constructor functions and their methods, but it doesn't introduce a new data type.

// WOAHHHHHHHHHH
console.log(typeof (className));

// Inheritance : child classed inherid properties methods in child classes

// Inheritance is useful for code reusability:
//Solves this biggest problem : DRY (Do not repeat yourself)

// Child class of Bank Account
function SavingAccount(customerName, balance = 0) {
    // to inherit the properties and methods of the parent class
    // Does not incude prototypes
    BankAccount.call(this, customerName, balance);
    this.transactionLimit = 10000;

}

// Prototype Inheritance : Inheritying the prototypes of the parent class
SavingAccount.prototype = Object.create(BankAccount.prototype);

// create the own prototype pf the child class
SavingAccount.prototype.childClassProtoype = function (anything) {
    console.log(anything);
}
const rayanAcc = new SavingAccount('Rayan');
console.log(rayanAcc.childClassProtoype('cjinsuhcbhusbvusdbi'));
console.log(rayanAcc.howYouDoing('Pooja'));





// Using class : Inheritance

class savingAccUsingClass extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance); // This will be initialized with parent constructor
    }
    takePersonalLoan(amount) {
        console.log('Amount Child Class : ', amount);
    }
}

const riddhiAcc = new savingAccUsingClass('Riddhi', 10);
// Prototypes of the parent class inherited directly-----
riddhiAcc.deposit(20)
riddhiAcc.withdraw(1)
console.log(riddhiAcc);

// Encapsulation : Implementation hidden (Reducing the inside complexity)

// All implementation are kept inside class so that it is not made accessible outside the class , and not changable outside class ---- Special methods are used to access those private values and modify it.

// Private properties and method

//Previous  Naming Convention : _balnace : Variables starting with _ is a private field

// Recent : #balance  --> Private Properties

class Person {
    // constructor(name, age) {
    //   // Private Properties
    //   let _name = name;
    //   let _age = age;

    //   // Public Methods - Getters and Setters
    //   this.setName = function (name) {
    //     _name = name;
    //   };

    //   this.getName = function () {
    //     return _name;
    //   };

    //   this.setAge = function (age) {
    //     _age = age;
    //   };

    //   this.getAge = function () {
    //     return _age;
    //   };
    // }

    #name;

    // Setters
    set name(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    // Creating Private Methods
    #priv() {
        console.log('This is the private func');
    }

    pub() {
        // called Internally -- Not accessible outside the class
        this.#priv();
        console.log('Public Function');
    }
}


//   const person = new Person("Alice", 30);
// console.log(person);
//   console.log(person.getName()); // Output: "Alice"
//   console.log(person.getAge()); // Output: 30

//   person.setName("Bob");
//   person.setAge(25);

//   console.log(person.getName()); // Output: "Bob"
//   console.log(person.getAge()); // Output: 25

const person = new Person();
person.name = 'cjsnvjndfk';
// console.log(person.name);
console.log(person.pub());

// Static Properties and Methods : The properties and methods for which there is no need to create the instance of the class

// Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.

// Use cases : confuguration , caching , utility function


// Utility Functions : Static Methods
class User {
    constructor(name, age , income) {
        this.name = name;
        this.age = age;
        this.income = income;
    }

    static campareByAge(user1 , user2){
        return user1.age - user2.age;
    }
    static campareByIncome(user1 , user2){
        return user1.income - user2.income;
    }

    // Caching  : Where the static methods and properties are aalaible in class
    static cache = {
        '1' : 'Some Value'
    }
    static hasInCache(){
        // To access teh cache variable inside classes static Function (using this keyword)

        // this : Only when static to static accessing is done
        console.log(this.cache);
    }

    // Static Block : Whenever the static Method is called first time , this will run 1 time first before every static method -- you can do initial configuration here
    static{
        console.log('Initialized.... ');
    }

}


// Built in static Methods also in JS : EG : Math.random() , Object.hasOwnProperty();

const user1 = new User('User 1', 100 , 7000);
const user2 = new User('User 2', 60 , 9000);

console.log(user1);
console.log(user2);
console.log(User.hasInCache());
// Sort the user based on age
const users = [user1, user2];
// users.sort((a, b) => a.age - b.age )  // Storing this method in the class -- but if used normally then it is bind to the instances , which is not correct , so making the static method for teh classs

// static method & class , not called on instances
users.sort(User.campareByAge);
// user related methods inside same class only -- More readable
console.log(users);

// Sorting on income
const userIncomes = [user1 , user2];
userIncomes.sort(User.campareByIncome);
console.log(userIncomes);


// static Properties : Whenever the user is created , assign ID -- Incremenet after each user is created

// let id = 1; -- Storing this id inside user only -- SO taht we come ot know & more organized

class friends{

    static id = 1;
    // to access , we do not use this.id coz thsi points to current instance (obj) -- static properties are bound to class -- className.id -- Acess

    constructor(name , age){
        this.name = name;
        this.age = age;
        this.id = friends.id++;
    }
}

const joey = new friends('joey' , 30);
const chandler = new friends('Chandler' , 28);
const ross = new friends('Ross' , 28);

console.log(joey , chandler , ross);


// 2 Use Case : Configuration
class configClass{
    static dbUser = 'username';
    static dbPass = 'password';
    static APIToken = "abcd";

    // Methods if needed
}

console.log(configClass.dbUser);
console.log(configClass.dbPass );
