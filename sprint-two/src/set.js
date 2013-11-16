var makeSet = function(){
  var set = Object.create(setMethods); // fix me
  set._storage = [];
  return set;
};

var setMethods = {};

setMethods.add = function(value){
  var status = true;
  for (var i = 0; i < this._storage.length; i++) {
    if (value === this._storage[i] && status) {
      status = false;
    }
  }

  if (status) {
    this._storage.push(value);
  }
};

setMethods.contains = function(value){
  for (var i = 0; i < this._storage.length; i++) {
    if (value === this._storage[i]) {
      return true;
    }
  }

  return false;
};

setMethods.remove = function(value){
  for (var i = 0; i < this._storage.length; i++) {
    if (value === this._storage[i]) {
      this._storage.splice(i, 1);
    }
  }
};
