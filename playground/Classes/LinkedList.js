/**
 * @class
 * @name LinkedList -
 * @desc LinkedList implementation using Node Class './Node.js' for ds/algo (wow, never seen that one before)
 *  */
class LinkedList {
  /**
   * think of a `LinkedList` like this
   * [node] -> [node] -> [node]
   * nodes pointing to nodes, a chain of sorts
   * the first node is called the `head`
   *
   * could be one node, thats ok.
   * [node]
   * but its kinda lonely, but lets not judge
   * little does our little [node] know, there is a [node] that wants to be their friend, theyre pointing at them
   *
   * how nice.
   * [node] -> [node]
   *
   * and so it continues...
   * [node] -> [node] -> [node] -> [node] -> [node] -> [node] -> [node] -> [node] -> [node] -> [node] -> [node] -> [node]
   * oh, god. call a scientist they became sentient
   */
  constructor() {
    this.head = null; // at first, there was nothing
    this.size = 0; // 0 === null? i wont get into it here. lol. [but for real, inital size is 0]
  }

  addFront(value) {
    const newNode = new Node(value); // it all begins with a little node

    if (this.head) {
      newNode.next = this.head; // the new node points at the last but only if size  > 0
    }

    this.head = newNode; // the linked list head is now the new node // the head is simply the starting point of a linked list
    this.size++; // 1-up (see func name)
  }

  insertAt(value, index) { // interesting, we can also insert a node any where along the chain
    let curr = this.head; // uh-oh, get ready for the iterator
    let prev; // leetcode.com users will know

    /**
     * We have to keep track of the current and previous nodes when we iterate
     * It's a pain, but thats why these types of questions are asked on coding interviews
     * We can only traverse this LinkedList in one direction, one node at a time, through the pointers
     * Draw a picture, trust me
     */
    while (curr && index > 0) {
      prev = curr;
      curr = curr.next;
      index--;
    }

    if (prev) { // found where we want to insert the node
      prev.next = new Node(value); // gotta make one first, adjust the pointers
      prev.next.next = curr;  // not going to try to explain in words, draw a picture, go line by line, you'll see it
      this.size++;
    } else {
      this.addFront(value); // index not found, so we insert, or create new list
    }
  }

  remove(value) {
    //TODO:: do
   // getting late, maybe tomorrow
  }

  length() {
    return this.size; // whats our current size?????
  }

  empty() {
    return !this.size; // are we empty?????
  }

  toString() { // what are we yelling, just tell me the contents of the linked list
    const result = [];
    let curr = this.head;

    // loop through `LinkedList`, 1 by 1, and add to array (easier to print that way)
    while (curr) {
      result.push(curr.val);
      curr = curr.next;
    }

    return result.join("->"); // see? we just join with symbol to present the pointer
  }
}
