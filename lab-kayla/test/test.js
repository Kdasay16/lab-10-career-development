'use strict'

const expect = require('chai').expect
const SLL = require('../lib/linked-list.js')

describe('SLL', function() {

  describe('reverse', function() {
    let sll = new SLL
    sll.append(1)
    sll.append(2)
    sll.append(3)
    sll.append(4)
    sll.reverse()

    it('should make the head 4', () => {
      expect(sll.head.val).to.equal(4)
      done()
    })

    it('should end with a value of 1', () => {
      expect(sll.tail.val).to.equal(1)
      done()
    })
  })

})
