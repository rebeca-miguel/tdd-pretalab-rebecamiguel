const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const fila = new Fila();
    const tamanhoDaFila = fila.tamanho();
    expect(tamanhoDaFila).toBe(3);
  });

  it('Deve ser capaz de adicionar um item na fila', () => {
    const fila = new Fila();
    fila.adicionar('item novo');
    expect(fila.tamanho()).toBe(1);
  });

  it('Deve escolher o primeiro item da fila', () => {
    const fila = new Fila();
    const primeiroItem = fila.escolherPrimeiro();
    expect(primeiroItem).toBe('Item 1');
  });

  it('Deve remover o primeiro item da fila', () => {
    const fila = new Fila();
    fila.adicionar('Item 1');
    const itemRemovido = fila.remover();  
  });
});