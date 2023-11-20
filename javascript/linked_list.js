class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  iterate(callback) {

    let this_node = this.head;
    if (!this_node) return [];
    let idx = 0;
    while (this_node) {
      callback(this_node, idx);
      idx++;
      this_node = this_node.next;
    }

  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    this.iterate((node) => console.log(node.value))
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    let result = null;
    this.iterate((node) => {
      if (node.value === target) result = node
    });
    return result;
  }

  // add the node to the start of the list, no nodes should be removed
  addFirst(node) {
    node.next = this.head;
    this.head = node;
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    if (!this.head) {
      this.head = node;
      return;
    }
    let lastNode = null;
    this.iterate((currNode) => {
      lastNode = currNode;
    });
    lastNode.next = node;

  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    if (!this.head) return null;
    const oldHead = this.head;
    this.head = this.head.next;
    return oldHead;
  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {
    if (!this.head) return null;
    let secondLastNode = null;
    this.iterate((currNode) => {
      if (currNode.next) secondLastNode = currNode;
    });
    const lastNode = secondLastNode.next;
    secondLastNode.next = null;
    return lastNode;
  }

  // replace the node at the given index with the given node
  replace(idx, node) {
    if (idx === 0) {
      this.removeFirst();
      this.addFirst(node)
    };
    this.iterate((currNode, currIdx) => {
      if (currIdx === idx -1) {
        node.next = currNode.next.next;
        currNode.next = node;        
      }
    })
    return node;
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  insert(idx, node) {
    if (idx == 0) this.addFirst(node);

    // let checkAdded = false;
    // this.iterate((currNode, currIdx) => {
    //   console.log(currNode, currIdx);
    //   if (currIdx === idx) {
    //     node.next = currNode;
    //     currNode = node;
    //     checkAdded = true;
    //   }
    // });

    // if (!checkAdded) this.addLast(node);

  }

  // remove the node at the given index, and return it
  remove(idx) {

  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

if (require.main === module) {
  head = new Node('one', new Node('two', new Node('three')))
  list = new LinkedList(head)
  list.iterate(n => console.log(n))
  list.replace(0, new Node('1'))
  list.iterate(n => console.log(n))
  list.replace(1, new Node('2'))
  list.iterate(n => console.log(n))
  list.replace(2, new Node('3'))
  list.iterate(n => console.log(n))
}

module.exports = {
  Node, LinkedList
};
