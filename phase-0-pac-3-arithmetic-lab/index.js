  function add(a, b) {
    let result = a + b;
    return result;
  }
  function subtract(a, b) {
    let result = a - b;
    return result;
  }
  function multiply(a, b) {
    let result = a * b;
    return result;
  }
  function divide(a, b) {
    let result = a / b;
    return result;
  }
  
  function makeInt(n) {
    return parseInt(n, 10);
  }
  function preserveDecimal(n) {
    return parseFloat(n);
  }

  function increment(n) {
    let result = n++;
    return result + 1;
  }

  function decrement(n) {
    let result = n--;
    return result - 1 ;
  }
