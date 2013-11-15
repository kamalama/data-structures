describe("tree", function() {
  var tree;

  beforeEach(function() {
    tree = makeTree();
  });

  it("should have methods named 'addChild' and 'contains', and a property named 'value'", function() {
    expect(tree.addChild).toEqual(jasmine.any(Function));
    expect(tree.contains).toEqual(jasmine.any(Function));
    expect('value' in tree).toBe(true);
  });

// Add more tests here to test the functionality of tree.
  // it("method addChild should take a value", function() {
  //   var tree2 = "test";
  //   tree.addChild(tree2);
  //   expect(tree.addChild()).toHaveBeenCalledWith(tree2);
  // });

  it("should add that node as a child of the tree using method addChild", function() {
    var tree2 = "tree2";
    tree.addChild(tree2);
    expect(tree.children).toContain("tree2");

  });
});




// A tree class, in functional with shared methods style, with the following properties:
// .children property, an array containing a number of subtrees
// .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
// A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node