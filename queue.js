class Queue {
  constructor() {
    this.items = []; 
  }

  adicionar(item) {
    this.items.push(item); 
  }

  tamanho() {
    return this.items.length; 
  }

  remover() {
    return this.items.shift(); 
  }

  escolherPrimeiro() {
    return this.items[0]; 
  }
}

module.exports = Queue;