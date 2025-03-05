const isPowerOf2 = (n: number) => {
  let value = 1;

  while (value < n) {
    value *= 2;
  }

  return value === n;
};

console.log(isPowerOf2(0) === false);
console.log(isPowerOf2(1) === true);
console.log(isPowerOf2(2) === true);
console.log(isPowerOf2(3) === false);
console.log(isPowerOf2(4) === true);
console.log(isPowerOf2(7) === false);
console.log(isPowerOf2(8) === true);
console.log(isPowerOf2(120) === false);
console.log(isPowerOf2(127) === false);
console.log(isPowerOf2(128) === true);
console.log(isPowerOf2(500) === false);
console.log(isPowerOf2(512) === true);
console.log(isPowerOf2(777) === false);
console.log(isPowerOf2(1024) === true);
console.log(isPowerOf2(65000) === false);
console.log(isPowerOf2(65536) === true);
console.log(isPowerOf2(520000) === false);
console.log(isPowerOf2(524288) === true);
console.log(isPowerOf2(1000000) === false);
