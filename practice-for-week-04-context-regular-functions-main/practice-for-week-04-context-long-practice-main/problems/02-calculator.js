// Your code here
class Calculator{
	constructor(){
		this.totalProperty = 0;
	}

	add(num){
		this.totalProperty = this.totalProperty+num;
		console.log(this.totalProperty);
		return this.totalProperty;
	}

	subtract(num){
		this.totalProperty = this.totalProperty-num;
		return this.totalProperty;
	}

	divide(num){
		this.totalProperty = this.totalProperty/num;
		return this.totalProperty;
	}

	multiply(num){
		this.totalProperty = this.totalProperty*num;
		return this.totalProperty;
	}
}

// let calc = new Calculator();
// console.log(calc);
// console.log(calc.add(10));
// console.log(calc.subtract(5));
// console.log(calc.divide(5));
// console.log(calc.multiply(100));


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
