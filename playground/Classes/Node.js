/**
 * @class
 * @name Node
 * @desc Base node class for ds/algo questions
 * lol, why did i even write this
 *  */
class Node {
  constructor(_val, _next = null) {
    this.val = _val; // the initial value of the node
    this.next = _next instanceof Node ? _next : null; // pointer to next node or null
  }
}
