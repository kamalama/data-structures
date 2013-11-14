var Queue = function() {

  this.head = 0;
  this.dequeueCount = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function(value){
  this.head++;
  this.storage[this.head-1] = value;
};

Queue.prototype.dequeue = function(){
  if (this.head - this.dequeueCount > 0) {
    this.dequeueCount++;
    var tempVal = {
    "0": this.storage[this.dequeueCount-1]
    };
    delete this.storage[this.dequeueCount-1];
    return tempVal[0];
  }
};

Queue.prototype.size = function(){
  return this.head-this.dequeueCount;
};

