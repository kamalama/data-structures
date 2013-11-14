var Stack = function() {
  // Hey! Copy your code from src/prototypal/stack.js and paste it here

  // Use an object with numeric keys to store values
  this.storage = {};
  this.len = 0; // Hint: set an initial value here

  // Implement the methods below

};


  Stack.prototype.push = function(value){
    this.storage[this.len] = value;
    this.len++;
  };

  Stack.prototype.pop = function(){
  (this.len > 0) && this.len--;
    return this.storage[this.len];
  };

  Stack.prototype.size = function(){
    return this.len;
  };
