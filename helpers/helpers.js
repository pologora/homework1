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

function isSmallerThan(str2) {
  const [a, b] = addZero(this, str2);

  for (let i = 0; i < a.length; i++) {
    num1 = a[i];
    num2 = b[i];

    if (num1 < num2) {
      return true;
    }
  }

  return false;
}

function removeZeroAtStart(str) {
  let num = str;
  let zero = num[0];

  while (zero == 0) {
    if (num[1] != null) {
      num = num.slice(1);
      zero = num[0];
    } else {
      return num;
    }
  }

  return num;
}

module.exports = { addZero, isBiggerOrEq, removeZeroAtStart, isSmallerThan };
