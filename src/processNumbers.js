function processNumbers(obj) {
  const numbers = obj.numbers;
  
  const maxNumber = Math.max(...numbers);
  const sum = numbers.reduce((acc, num) => acc + num, 0);

  const result = {

    suma: sum,
    max: maxNumber
  };

  return result;
}
