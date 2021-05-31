const Calculator = require('./calculator');

// test('dummy', () => {
//   expect(1 + 1).toBe(2);
// })

/* YOUR TESTS HERE - comment dummy test out */

// describe('Description of a group of tests', () => {
//   test('Description of a single test', () => {
//     <The Test>
//   })
// })


describe('Add', () => {
  test('1 plus 1 should return 2', () => {
    // Arrange
    calculator = new Calculator();
    number_one = 1;
    number_two = 1;
    expected = 2;

    // Act
    result = calculator.add(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('1 plus 0 should return 1', () => {
    // Arrange
    calculator = new Calculator();
    number_one = 1;
    number_two = 0;
    expected = 1;

    // Act
    result = calculator.add(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('-1 plus 2 should return 1', () => {
    // Arrange
    calculator = new Calculator();
    number_one = -1;
    number_two = 2;
    expected = 1;

    // Act
    result = calculator.add(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('-1 plus -2 should return -3', () => {
    // Arrange
    calculator = new Calculator();
    number_one = -1;
    number_two = -2;
    expected = -3;

    // Act
    result = calculator.add(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })
})

describe('Sub', () => {
  test('2 minus 1 should return 1', () => {
    // Arrange
    calculator = new Calculator();
    number_one = 2;
    number_two = 1;
    expected = 1;

    // Act
    result = calculator.sub(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('1 minus 0 should return 1', () => {
    // Arrange
    calculator = new Calculator();
    number_one = 1;
    number_two = 0;
    expected = 1;

    // Act
    result = calculator.sub(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('2 minus 3 should return -1', () => {
    // Arrange
    calculator = new Calculator();
    number_one = 2;
    number_two = 3;
    expected = -1;

    // Act
    result = calculator.sub(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('-1 minus -2 should return 1', () => {
    // Arrange
    calculator = new Calculator();
    number_one = -1;
    number_two = -2;
    expected = 1;

    // Act
    result = calculator.sub(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('1 minus 1 should return 0', () => {
    // Arrange
    calculator = new Calculator();
    number_one = 1;
    number_two = 1;
    expected = 0;

    // Act
    result = calculator.sub(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })
})

describe('Mult', () => {
  test('1 times 1 should return 1', () => {
    // Arrange
    calculator = new Calculator();
    number_one = 1;
    number_two = 1;
    expected = 1;

    // Act
    result = calculator.mult(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('1 times 0 should return 1', () => {
    // Arrange
    calculator = new Calculator();
    number_one = 1;
    number_two = 0;
    expected = 0;

    // Act
    result = calculator.mult(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('2 times 3 should return 6', () => {
    // Arrange
    calculator = new Calculator();
    number_one = 2;
    number_two = 3;
    expected = 6;

    // Act
    result = calculator.mult(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('0 times 0 should return 0', () => {
    // Arrange
    calculator = new Calculator();
    number_one = 0;
    number_two = 0;
    expected = 0;

    // Act
    result = calculator.mult(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('-1 times 1 should return -1', () => {
    // Arrange
    calculator = new Calculator();
    number_one = -1;
    number_two = 1;
    expected = -1;

    // Act
    result = calculator.mult(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('-1 times -1 should return 1', () => {
    // Arrange
    calculator = new Calculator();
    number_one = -1;
    number_two = -1;
    expected = 1;

    // Act
    result = calculator.mult(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })
})

describe('Div', () => {
  test('1 divided by 1 should return 1', () => {
    // Arrange
    calculator = new Calculator();
    number_one = 1;
    number_two = 1;
    expected = 1;

    // Act
    result = calculator.div(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('1 divided by 0 should return null', () => {
    // Arrange
    calculator = new Calculator();
    number_one = 1;
    number_two = 0;
    expected = null;

    // Act
    result = calculator.div(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('10 divided by 2 should return 5', () => {
    // Arrange
    calculator = new Calculator();
    number_one = 10;
    number_two = 2;
    expected = 5;

    // Act
    result = calculator.div(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('-2 divided by 1 should return -2', () => {
    // Arrange
    calculator = new Calculator();
    number_one = -2;
    number_two = 1;
    expected = -2;

    // Act
    result = calculator.div(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })

  test('-2 divided by -1 should return 2', () => {
    // Arrange
    calculator = new Calculator();
    number_one = -2;
    number_two = -1;
    expected = 2;

    // Act
    result = calculator.div(number_one, number_two);

    // Assert
    expect(result).toBe(expected);
  })
})