class Calculator {

  add(number_one, number_two) {
    /*
      Adds the second number to the first and returns the result
    */
    return number_one + number_two;
  }

  sub(number_one, number_two) {
    /*
      Subtracts the second number from the first and returns the result
    */
    return number_one - number_two;
  }

  mult(number_one, number_two) {
    /*
      Multiplies the first and second numbers and returns the result
    */
    return number_one * number_two;
  }

  div(dividend, divisor) {
    /*
      Divides the first number by the second and returns the result
    */
    return dividend / divisor;
  }

  exp(base, power) {
    /*
      To implement the exponentiation function
    */
    throw Exception("Not Implemented!!!")
  }

  mod(dividend, divisor) {
    /*
      To implement the modulus (also known as remainder) function
    */
    throw Exception("Not Implemented!!!")
  }
}

module.exports = Calculator