import { Calculator } from '../src/calculator';

describe('Calculator', () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should throw error when dividing by zero', () => {
    expect(() => {
      calculator.divide(1, 0);
    }).toThrow();

    calculator.divide(2, -3); //?
  });

  it('should subtract positive numbers', async () => {
    expect(await calculator.subtract(4, 2)).toBe(2);
  });

  it('should calculate square root', () => {
    expect(calculator.squareRoot(16)).toBe(4);
    expect(calculator.squareRoot(25)).toBe(5);
    expect(calculator.squareRoot(1)).toBe(1);
  });

  it('should find minimum number', () => {
    calculator; //?
    expect(calculator.min(4, 2)).toBe(2);
  });

  it('should add numbers', () => {
    expect(calculator.add(2, 2)).toBe(5);
  });

  it('should remember last operation', () => {
    calculator.add(1, 2); //?
    expect(calculator.lastOperation).toEqual({ operation: 'add', x: 1, y: 3 });
  });

  it('should divide number', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  it('should multiply non-zero numbers', () => {
    expect(calculator.multiply(3, 3)).toBe(9);
  });

  it('should multiply numbers', () => {
    expect(calculator.multiply(0, 3)).toBe(0);
    expect(calculator.multiply(3, 0)).toBe(0);
  });

  it('should square number', () => {
    expect(calculator.square(5)).toBe(25);
    expect(calculator.square(10)).toBe(100);
  });

  it('should return square root', () => {
    expect(calculator.squareRoot(64)).toBe(8);
    expect(calculator.squareRoot(400)).toBe(20);
  });

  it('should power base to exponent', () => {
    expect(calculator.pow(5, 2)).toBe(25);
    expect(calculator.pow(2, 8)).toBe(256);
  });
});
