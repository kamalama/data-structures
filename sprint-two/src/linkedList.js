// Note: don't use an array to do this.
var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(node){
    if(list.head === null) {
      list.head = node;
      list.tail = node;
    }
    else {
      list.tail.next = node;
      list.tail = node;
    }
  };

  list.removeHead = function(){
    var tempVal = list.head;
    list.head = list.head.next;
    return tempVal;
  };

  list.contains = function(node, nodeChecking){
    nodeChecking = nodeChecking || list.head;

    if (nodeChecking === node) {
      return true;
    }
    else {
      if (nodeChecking === list.tail) {
        return false;
      } else {
        list.contains(node, nodeChecking.next);
      }
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
