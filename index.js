
const spies = 'chai-spies';
const chai ='chai';

function receivesAFunction(callback) {
  callback();
}


function returnsANamedFunction() {
  return function namedFunction() {};
}

function returnsAnAnonymousFunction() {
  return function() {};
}