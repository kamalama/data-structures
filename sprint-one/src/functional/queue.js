var makeQueue = function(){
  var instance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  instance.enqueue = function(value){
    size++;
  };

  instance.dequeue = function(){
    (size > 0) && size--;
  };

  instance.size = function(){
    return size;
  };

  return instance;
};
