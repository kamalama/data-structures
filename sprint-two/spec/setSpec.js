describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).toEqual(jasmine.any(Function));
    expect(set.contains).toEqual(jasmine.any(Function));
    expect(set.remove).toEqual(jasmine.any(Function));
  });

  it("should take any string and add it to the set using .add()", function() {
    var str = "testString";
    var str2 = "anotherString";
    var str2Fake = "anotherString";

    set.add(str);
    set.add(str2);
    set.add(str2Fake);
    expect(set._storage).toContain("testString");
    expect(set._storage).toContain("anotherString");
    expect(set._storage.length).toEqual(2);
  });

  it("should take any string and return a boolean if it can be found in the set using .contains()", function() {
    var str = "testString";
    var str2 = "anotherString";
    var str3 = "notHere";

    set.add(str);
    set.add(str2);

    expect(set.contains("testString")).toBeTruthy();
    expect(set.contains("anotherString")).toBeTruthy();
    expect(set.contains("notHere")).toBeFalsy();
  });

  it("should take any string and remove it from the set, if present, using .remove()", function() {
    var str = "testString";
    var str2 = "anotherString";

    set.add(str);
    set.add(str2);
    set.remove(str);
    expect(set._storage).not.toContain("testString");

    set.remove(str2);
    expect(set._storage).not.toContain("anotherString");
  });
});



// A set class, in prototypal style, with the following properties:

// An .add() method, takes any string and adds it to the set

// A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set

// A .remove() method, takes any string and removes it from the set, if present

// Note: Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second 
//time should not increase the size of the set.
//
// Note: Until the extra credit section, your sets should handle only string values.