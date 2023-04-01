// Your code here
class Car{
	constructor(speed){
		this.speed = speed;
	}

	drive(newSpeed){
		this.speed = newSpeed;
		return this.speed;
	}
}

let car = new Car(0);
console.log(car);
car.drive(10)
console.log(car);
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
