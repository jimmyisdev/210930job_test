// 實作 Fibonacci number (費式數列)
// 建立函式 fibonacci 代入參數 position,position 表示的是想要得到 fibonacci
// sequence 中的第幾個數字的值。
// fibonacci(0) // 0
// fibonacci(1) // 1
// fibonacci(2) // 1
// fibonacci(3) // 2
// fibonacci(4) // 3

// 0 1 2 3 4 5 6  7   8

// 0 1 1 2 3 5 8  13 21


// p = 

function fibonacci(inputVal) {
  let n = inputVal;
  if (n < 2) {
    return n;
  } else {
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n - 1];
  }
}
console.log(fibonacci(8))
