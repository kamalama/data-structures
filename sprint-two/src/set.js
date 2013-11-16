var makeSet = function(){
  var set = Object.create(setMethods); // fix me
  set._storage = [];
  return set;
};

var setMethods = {};

setMethods.add = function(value){
  this._storage.push(value);
};

setMethods.contains = function(value){
  for (var i = 0; i < this._storage.length; i++) {
    if (value === this._storage[i]) {
      return true;
    }
  }

  return false;
};

setMethods.remove = function(){
  
};
