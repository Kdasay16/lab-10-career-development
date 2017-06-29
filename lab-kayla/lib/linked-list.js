'use strict';

const Node = require('./reverse');

const SLL = module.exports = function() {
  this.head = null;
};

SLL.prototype.prepend = function(value) {
  let node = new Node(value);
  if(!this.head) {
    this.head = node;
    return this;
  }

  node.next = this.head;
  this.head = node;
  return this;
};

SLL.prototype.append = function(value) {
  let node = new Node(value);
  let lastNode = null;

  if(!this.head) {
    this.head = node;
    return this;
  }

  _setLastNode(this.head);
  lastNode.next = node;
  return this;

  function _setLastNode(node) {
    if(!node) return;
    lastNode = node;
    _setLastNode(node.next);
  }
};

SLL.prototype.remove = function(node) {
  node = node.next;
  return node;
};

SLL.prototype.reverse = function() {
  let newSLL = new SLL();
  while (this.head) {
    newSLL.prepend(this.head.val);
    this.head = this.remove(this.head);
  }
  return newSLL;
};
