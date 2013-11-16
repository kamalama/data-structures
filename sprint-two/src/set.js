var makeSet = function(){
  var set = Object.create(setMethods); // fix me
  set._storage = [];
  return set;
};

var setMethods = {};

setMethods.add = function(value){
  this._storage.push(value);
};

setMethods.contains = function(){
};

setMethods.remove = function(){
};
