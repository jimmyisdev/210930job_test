import React from 'react'
// import { debounce, throttle } from "./../func/debounce_throttle";

export default function DebounceOrThrottle() {
  function consoleLog() {
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
          <button onClick={debounce(consoleLog, 2000)}>Debounce</button>
        </div>
      </div>
    </section>
  );
}
