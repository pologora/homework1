exports.addZero = function addZero(a, b) {
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
};

exports.isBiggerOrEq = function isBiggerOrEq(a, b) {
  return a >= b;
};
