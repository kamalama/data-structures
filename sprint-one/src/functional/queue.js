var makeQueue = function(){
  var instance = {};
  var head = 0;
  var dequeueCount = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  instance.enqueue = function(value){
    head++;
    storage[head-1] = value;
  };

  instance.dequeue = function(){
    if (head - dequeueCount > 0) {
      dequeueCount++;
      var tempVal = {
      "0": storage[dequeueCount-1]
      };
      delete storage[dequeueCount-1];
      return tempVal[0];
    }
  };

  instance.size = function(){
    return head-dequeueCount;
  };

  return instance;
};
