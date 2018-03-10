const expect = require("chai").expect;
const LinkedList = require('../src/linked_lists');

describe("addToHead()", function() {
  const list = new LinkedList();  
  
  it("should also add to tail if first node", function() {
    list.addToHead('1');
    expect(list.head).to.be.equal(list.tail);
  });

  it("should add new node to head", function() {
    const value = "a new value for the node";
    list.addToHead(value);
    expect(list.head.data).to.be.equal(value);
  });
  
  it("should have next set to previews head", function() {
    const value = "yet another new value for the node";
    const currentHead = list.head;
    list.addToHead(value);
    expect(list.head.next).to.be.equal(currentHead);
  });
    
  
});


describe("addToTail()", function() {
  const list = new LinkedList();

  it("should also add to head if first node", function() {
    list.addToTail("1");
    expect(list.tail).to.be.equal(list.head);
  });

  it("should add new node to tail", function() {
    const value = "a new value for the node";
    list.addToTail(value);
    expect(list.tail.data).to.be.equal(value);
  });

  it("should previous tail.next set to new tail", function() {
    const value = "yet another new value for the node";
    const previous = list.tail;
    list.addToTail(value);
    expect(previous.next).to.be.equal(list.tail);
  });

});


describe("addToIndex()", function() {
  const list = new LinkedList();
  list.addToHead("test 1");
  list.addToHead("test 2");
  list.addToHead("test 3");
  list.addToHead("test 4");
  

  it("should be added to head if index is 0", function() {
    const value = "teste 5";
    list.addToIndex(0, value);
    expect(list.head.data).to.be.equal(value);
  });

  it("should not be added if index is bigger than the list", function() {
    const value = "teste 5";
    const list_size = list.length;
    list.addToIndex(110, value);
    expect(list.length).to.be.equal(list_size);
  });  

});

describe("contains()", function () {
    const list = new LinkedList();
    list.addToHead("test 1");
    list.addToHead("test 2");
    list.addToHead("test 3");
    list.addToHead("test 4");

    it("should return true if value is found", function() {
      expect(list.contains("test 4")).to.be.equal(true);
    });

    it("should return false if value is not found", function() {
      expect(list.contains("test 50")).to.be.equal(false);
    });

})

describe("getByIndex()", function() {
  const list = new LinkedList();
  list.addToHead("test 1");
  list.addToHead("test 2");
  list.addToHead("test 3");
  list.addToHead("test 4");
  list.addToIndex(3, 'index searched')

  it("should return the correct value for a given index", function() {
    expect(list.getByIndex(3)).to.be.equal("index searched");
  });

  it("should return false if not found", function() {
    expect(list.getByIndex(30)).to.be.equal(false);
  });

  it("should return false if index is negative", function() {
    expect(list.getByIndex(-3)).to.be.equal(false);
  });

});


describe("removeFromHead()", function() {
  const list = new LinkedList();
  list.addToHead("test 1");
  list.addToHead("test 2");
  list.addToHead("test 3");
  list.addToHead("test 4");

  it("should remove element from head", function() {
    const prevHead = list.head;
    list.removeFromHead();
    expect(list.head).to.not.be.equal(prevHead);
  });

 it("should return false if there's no head", function() {
  const list = new LinkedList();
   expect(list.removeFromHead()).to.be.equal(false);
 });

  it("should should also set tail to null of head was the only node on list", function() {
    const list = new LinkedList();
    list.addToHead('test');
    list.removeFromHead();
    expect(list.tail).to.be.equal(null);
  });

});


describe("removeFromTail()", function() {
  const list = new LinkedList();
  list.addToHead("test 1");
  list.addToHead("test 2");
  list.addToHead("test 3");
  list.addToHead("test 4");

  it("should remove element from tail", function() {
    list.removeFromTail();
    expect(list.tail.data).to.be.equal("test 2");
  });

  it("should return false if there's no tail", function() {
    const list = new LinkedList();
    expect(list.removeFromTail()).to.be.equal(false);
  });
  

});