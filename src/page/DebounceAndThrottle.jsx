import React from 'react'
// import { debounce, throttle } from "./../func/debounce_throttle";

export default function DebounceAndThrottle() {
  function consoleLog() {
    console.log("click");
  }

  
  function debounce(func, delay) {
    let handleTimeOut;
    
    return function () {
      let args = arguments;
      handleTimeOut && clearTimeout(handleTimeOut);
      handleTimeOut = setTimeout( function(){
        console.log("yes")
        func(args);
      }
      , delay);
    };
  }
  
 function throttle(func, timeout) {}
  return (
    <section className="debounceAndThrottle">
      <div>
        <h1>Debounce & Throttle</h1>
      </div>
      <div>
        <div>
          <button onClick={() => debounce(consoleLog, 2000)}>Debounce</button>
          <span></span>
        </div>
        <div>
          <button onClick={throttle}>Throttle</button>
        </div>
      </div>

    </section>
  );
}
