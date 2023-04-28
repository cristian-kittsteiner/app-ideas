function binToDec(stringNum) {
  let decimal = 0;
  let exponent = 0;
  let negExp = -1;
  const decPoint = stringNum.indexOf(".");
  if (decPoint !== -1) {
    for (let i = decPoint - 1; i >= 0; i--) {
      const number = stringNum[i];
      decimal += number * Math.pow(2, exponent);
      exponent++;
    }
    for (let i = decPoint + 1; i <= stringNum.length - 1; i++) {
      const number = stringNum[i];
      decimal += number * Math.pow(2, negExp);
      negExp--;
    }
  } else {
    for (let i = stringNum.length - 1; i >= 0; i--) {
      const number = stringNum[i];
      if (number == 0 || number == 1) {
        decimal += number * Math.pow(2, exponent);
        exponent++;
      } else {
        return "Error! Please only enter 1s or 0s";
      }
    }
  }

  return decimal;
}

export default binToDec;
