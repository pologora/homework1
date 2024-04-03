function addZero(a, b) {
  if (a.length > b.length) {
    while (a.length > b.length) {
      b = '0' + b;
    }
  } else if (b.length > a.length) {
    while (b.length > a.length) {
      a = '0' + a;
    }
  }

  return [a, b];
}

function isBiggerOrEq(str2) {
  const [a, b] = addZero(this, str2);

  for (let i = 0; i < a.length; i++) {
    num1 = a[i];
    num2 = b[i];

    if (num1 > num2) {
      return true;
    } else if (num1 < num2) {
      return false;
    }
  }

  return true;
}

function removeZeroAtStart(str) {
  return str.replace(/^0+/, '');
}

module.exports = { addZero, isBiggerOrEq, removeZeroAtStart };
