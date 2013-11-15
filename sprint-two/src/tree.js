var makeTree = function(){
  var newTree = {};
  newTree.value = undefined;
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

treeMethods.contains = function(){
};

