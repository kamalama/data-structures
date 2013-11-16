describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it("should handle hash function collisions", function(){
    // force the hash function to return 0
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(0);
    var v1 = 'val1', v2 = 'val2';
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  
});


// A hashTable class, in pseudoclassical style:

// First: Play with each of the helper functions provided to get a sense of what they do.

// You will use the provided hash function to convert any key into an array index.
// Try interacting with it from the console first.

// A limitedArray helper has been provided for you. Use it to store all inserted values.
// Try interacting with it from the console first.

// Make the following properties appear on all instances:

// An .insert() method

// A .retrieve() method

// A .remove() method

















//it("should make a .insert() property appear", function(){
  //   var testTupleArr = [
  //   ["tuple1", "another Value"],
  //   ["tuple2", "another Value"],
  //   ["tuple3", "another Value"],
  //   ["tuple4", "another Value"],
  //   ["tuple5", "another Value"],
  //   ["tuple6", "another Value"],
  //   ["tuple7", "another Value"],
  //   ["tuple8", "another Value"],
  //   ["tuple9", "another Value"]];

  //   for (var i = 0; i < testTupleArr.length; i++) {
  //     hashTable.insert(testTupleArr[i][0], testTupleArr[i][1]);
  //   }

  //   expect(hashTable).toContain(["tuple1", "another Value"]);
  // });