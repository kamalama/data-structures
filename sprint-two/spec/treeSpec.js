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

  it("should add that node as a child of the tree using method addChild", function() {
    var tree2 = "tree2";
    var tree3 = "tree3";
    tree.addChild(tree2);
    tree.addChild(tree3);
    expect(tree.children).toContain("tree2");
    expect(tree.children).toContain("tree3");
  });

  it("should return a boolean reflecting whether a value can be found using .contains()", function() {
    var tree2 = makeTree("tree2");
    var tree3 = makeTree("tree3");
    var tree4 = makeTree("tree4");
    var tree5 = makeTree("tree5");
    var tree6 = makeTree("tree6");
    var tree7 = makeTree("tree7");
    tree.addChild(tree2);
    tree.addChild(tree3);
    tree2.addChild(tree4);
    tree2.addChild(tree5);
    tree2.addChild(tree6);
    tree3.addChild(tree7);
    expect(tree.contains("tree5")).toBeTruthy();
    expect(tree2.contains("tree3")).toBeFalsy();
    expect(tree.contains("tree7")).toBeTruthy();
    expect(tree3.contains("tree7")).toBeTruthy();
    expect(tree3.contains("tree4")).toBeFalsy();
  });
});


// A tree class, in functional with shared methods style, with the following properties:

// .children property, an array containing a number of subtrees

// .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree

// A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the
// value of the target node or any descendant node