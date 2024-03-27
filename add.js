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

export function add(a, b) {
  [a, b] = addZero(a, b);
  let result = '';
  let remember = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    let sum = Number(a[i]) + Number(b[i]) + remember;

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
}
