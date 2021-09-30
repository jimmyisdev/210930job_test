import React, { useState } from "react";

export default function Fibonacci() {
  const [ inputVal, setInputVal ] = useState(0)
  const [ result, setResult ] = useState(0);

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

  function calcResult(inputVal) {
    let calc = fibonacci(inputVal);
    setResult(calc)
  }
    return (
      <section className="fibonacci">
        <div className="box_title">
          <h1>Fibonacci</h1>
        </div>
        <div className="box_content">
          <input
            type="number"
            onChange={(e) => setInputVal(Math.abs(e.target.value))}
            value={inputVal}
            autoFocus
          />
          <button onClick={() => calcResult(inputVal)}>Confirm</button>
        </div>
        <div>
          <span>{result}</span>
        </div>
        <div>
          <h3>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/jimmyisdev/210930job_test/blob/main/src/func/fibonacci_number.js"
            >
              Check Code on Github
            </a>
          </h3>
        </div>
      </section>
    );

    
}
