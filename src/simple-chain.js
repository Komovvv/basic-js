const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  reversed: false,

  _reset() {
    this.chain = []
    this.reversed = false
  },

  getLength() {
    return this.chain.length
  },
  
  addLink(value) {
    if (this.reversed) {
      this.chain.unshift(value)
    } else {
      this.chain.push(value)  
    }
    return this
  },
  
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this._reset()
      throw new Error('input argument must be an integer')
    }
    
    position--;
    if (position < 0 || position >= this.chain.length) {
      this._reset()
      throw new Error('chain out of bound exception');   
    }

    let index = this.reversed ? this.chain.length - position - 1: position
    this.chain.splice(index, 1)
    return this
  },

  reverseChain() {
    this.reversed = !this.reversed;
    return this
  },
  
  finishChain() {
    if (this.reversed) {
      this.chain.reverse()
    }

    let finishedChain = this.chain.map(x => `( ${x} )`).join("~~")
    this._reset()
    return finishedChain
  }
};

module.exports = {
  chainMaker
};
