class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

const LinkedList = class LinkedList {
  constructor() {
    (this.head = null), (this.tail = null);
    this.length = 0;
  }
  addToHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length += 1;

    // If only node, it's also the tail
    if (node.next == null) {
      this.tail = node;
    }
    return this;
  }

  addToTail(value) {
    const node = new Node(value);
    
    // If only node, it's also the head
    if (this.tail == null) {
      this.head = node;
    } else {
      this.tail.next = node;      
    }

    this.tail = node;
    this.length += 1;
    return this;
  }


  addToIndex(index, value) {
    const node = new Node(value);

    // If index 0, add to head
    if (index === 0) {
      this.addToHead(value);
      return this;
    }

    let current = this.head;

    for (let i = 0; i < index -1; i++) {
      current = current.next;
      
      if (current.next === null ) {
        console.log('This index is greater than the size of the list');
        return this;
      }

      if (current.next === null) {
        this.addToTail(value);  
        return this;
      }
    }

    node.next = current.next;
    current.next = node;
    
    this.length += 1;
    return this;
  }

  contains(value) {
    let current = this.head;
    
    while (current != null) {
      if (current.data == value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  getByIndex(index) {

    if (index < 0) {
      return false;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;      
    
      if (current === null) {
        return false;
      }

    }

    return current.data;
  }

  removeFromHead() {
    if (this.head === null) {
      return false;
    }    
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
  }

  removeFromTail() {
    let current = this.head;

    if (this.tail === null) {
      return false;
    } 


    while (current.next != this.tail) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;

  }

}



module.exports = LinkedList;

