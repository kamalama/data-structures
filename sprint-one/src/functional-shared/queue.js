var makeQueue = function(){
  // Hey! Copy your code from src/functional/queue.js and paste it here
  var instance = {};
  instance.head = 0;
  instance.dequeueCount = 0;
  instance.storage = {};
  $.extend(instance, queueMethods);

  // Implement the methods below

  return instance;
};

var queueMethods = {};
  queueMethods.enqueue = function(value){
    this.head++;
    this.storage[this.head-1] = value;
  };

  queueMethods.dequeue = function(){
    if (this.head - this.dequeueCount > 0) {
      this.dequeueCount++;
      var tempVal = {
      "0": this.storage[this.dequeueCount-1]
      };
      delete this.storage[this.dequeueCount-1];
      return tempVal[0];
    }
  };

  queueMethods.size = function(){
    return this.head-this.dequeueCount;
  };

