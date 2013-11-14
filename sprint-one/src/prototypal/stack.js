var makeStack = function() {
  var instance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  instance.storage = {};
  instance.len = 0; // Hint: set an initial value here

  // Implement the methods below
  return instance;

};

var stackMethods = {};

  stackMethods.push = function(value){
    this.storage[this.len] = value;
    this.len++;
  };

  stackMethods.pop = function(){
  (this.len > 0) && this.len--;
    return this.storage[this.len];
  };

  stackMethods.size = function(){
    return this.len;
  };
