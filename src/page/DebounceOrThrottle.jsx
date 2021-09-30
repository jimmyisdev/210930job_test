import React, { useState } from 'react'
// import { debounce, throttle } from "./../func/debounce_throttle";

export default function DebounceOrThrottle() {
  const [clckedBtn, setclckedBtn] = useState(0)
  function consoleLog() {
    setclckedBtn(clckedBtn=> clckedBtn + 1);
    console.log("click");
  }
  function debounce (func, delay){
    let handleTimeOut;
    return function (...args) {
      handleTimeOut && clearTimeout(handleTimeOut);
      handleTimeOut = setTimeout(()=>{
        func(...args);
      }, delay);
    };
  }
  

  return (
    <section className="debounceAndThrottle">
      <div className="box_title">
        <h1>Debounce || Throttle</h1>
      </div>
      <div className="box_content">
        <div>
          <button onClick={debounce(consoleLog, 1500)}>Debounce</button>
        </div>
        <div>{clckedBtn}</div>
      </div>
      <div>
        <h3>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/jimmyisdev/210930job_test/blob/main/src/func/debounce_throttle.js"
          >
            Check Code on Github
          </a>
        </h3>
      </div>
    </section>
  );
}
