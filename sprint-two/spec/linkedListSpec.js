describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  // add more tests here to test the functionality of linkedList

  it("method 'addToTail' should take a value and add it to the end of the list", function() {
    var data = {};
    var testNode = makeNode(data);
    linkedList.addToTail(testNode);
    expect(linkedList.tail).toEqual(testNode);

    var data2 = {};
    var testNode2 = makeNode(data2);
    linkedList.addToTail(testNode2);
    expect(linkedList.tail).toEqual(testNode2);
    expect(linkedList.head).toEqual(testNode);
  });

  it("should link two nodes using node.next", function() {
    var data = {};
    var testNode = makeNode(data);
    linkedList.addToTail(testNode);
    var data2 = {};
    var testNode2 = makeNode(data2);
    linkedList.addToTail(testNode2);
    expect(linkedList.head.next).toEqual(linkedList.tail);
  });

  // it("method 'contains' should return true if list contains node", function() {
  //   var data = 1;
  //   var testNode = makeNode(data);
  //   expect(linkedList.contains(testNode).toEqual(true));
  // });

});