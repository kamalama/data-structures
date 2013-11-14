var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0; // Hint: set an initial value here

  // Implement the methods below

  instance.push = function(value){
    storage[size] = value;
    size++;
  };

  instance.pop = function(){
    (size > 0) && size--;
    return storage[size];
  };

  instance.size = function(){
    return size;
  };

  return instance;
};

var stackMethods = {};
