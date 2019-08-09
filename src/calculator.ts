interface Operation {
  operation: string;
  x: number;
  y?: number;
}

export class Calculator {
  operations: Operation[] = [];
  lastOperation: Operation = null;

  add(a: number, b: number) {
    this.lastOperation = { operation: 'add', x: a, y: b };
    this.operations.push(this.lastOperation);
    if (a === 0) return b;
    if (b === 0) return a;
    return a + b;
  }

  async subtract(a: number, b: number) {
    this.lastOperation = { operation: 'subtract', x: a, y: b };
    this.operations.push(this.lastOperation);
    return Promise.resolve(a - b);
  }

  multiply(a: number, b: number) {
    this.lastOperation = { operation: 'multiply', x: a, y: b };
    this.operations.push(this.lastOperation);

    if (a === 0 || b === 0) return 0;
    return a * b;
  }

  divide(a: number, b: number) {
    this.lastOperation = { operation: 'divide', x: a, y: b };
    this.operations.push(this.lastOperation);

    if (b === 0) throw new Error('Attempt to divide by zero');
    return a / b;
  }

  square(a: number) {
    this.operations.push({ operation: 'squ1are', x: a });
    return a * a;
  }

  squareRoot(a: number) {
    this.operations.push({ operation: 'squareRoot', x: a });
    return Math.sqrt(a);
  }

  pow(a: number, b: number) {
    this.operations.push({ operation: 'pow', x: a, y: b });
    return Math.pow(a, b);
  }

  min(a: number, b: number): number {
    this.operations.push({ operation: 'min', x: a, y: b });
    throw new Error('Not implemented');
  }
}
