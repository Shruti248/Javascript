// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

let x = say.call(helloMessage , 'John');
let y = say.call(heyThereMessage , 'Michael');

// say(helloMessage, "John");
// say(heyThereMessage, "Michael");
