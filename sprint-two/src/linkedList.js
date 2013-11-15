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
//    list.head.next.value = list.head.next;
  };

  list.contains = function(node){

    for (var i in list) {
      if (i !== undefined && node === i) {
        return true;
      }

      return false;
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
