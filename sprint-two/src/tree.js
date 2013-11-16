var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(child){
  if(this.children === undefined){
    this.children = [child];
  }
  else {
    this.children.push(child);
  }
};

treeMethods.contains = function(input, status){
  status = status || false;
  if(this.value === input && status === false) {
    return true;
  }

  if (this.children !== undefined) {
    for(var i = 0; i < this.children.length; i++) {
      status = this.children[i].contains(input, status);
      if (status) {
        return true;
      }
    }
  }

  return status;
};