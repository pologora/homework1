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

exports.add = function (b) {
  const [str1, str2] = addZero(this, b);

  let result = '';
  let remember = 0;

  for (let i = str1.length - 1; i >= 0; i--) {
    let sum = Number(str1[i]) + Number(str2[i]) + remember;

    if (sum >= 10) {
      remember = 1;
      sum = sum - 10;
    } else {
      remember = 0;
    }

    result = sum + result;
  }

  if (remember === 1) {
    result = '1' + result;
  }

  return result;
};
