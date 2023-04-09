let input = 'username=azure+green&password=password%21'

function firstStep(input) {
  // Your code here
  return input.split('&')
}


function secondStep(input) {
  // Your code here
  const keyValuePairs = input.map(element => {
    const [key, value] = element.split('=');
    return [key, value];
  })

  return keyValuePairs;
}


function thirdStep(input) {
  // Your code here
  const decodedPairs = input.map(pair => {
    const [key, value] = pair;
    const decodedValue = decodeURIComponent(value.replace(/\+/g, ' '));
    return [key, decodedValue];
  });

  return decodedPairs;

}

function fourthStep(input) {
  // Your code here
  const obj = {};

  input.forEach(pair => {
    const [key, value] = pair;
    obj[key] = value;
  });

  return obj;


}

function fifthStep(input) {
  // Your code here
  return JSON.stringify(input);

}

function parseBody(str) {
  // Your code here
  let input = str;
  input = firstStep(input);
  input = secondStep(input);
  input = thirdStep(input);
  input = fourthStep(input);
  input = fifthStep(input);

  return input;
}

console.group(parseBody(input));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
