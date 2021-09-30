// 擇一實作 Debounce 或 Throttle
// debounce 是在 delay 時間內如果重新觸發會取消前一次並保留當下觸發的執行。
// throttle 在觸發後的 timeout 時間內只會執行一次。
// 建立函式 debounce 或 throttle 帶入參數如下範例:
// const debounceFunc = debounce(func, delay);
// const throttleFunc = throttle(func, timeout);


export default function debounce(func, delay) {
    let handleTimeOut;
    return function (...args) {
      handleTimeOut && clearTimeout(handleTimeOut);
      handleTimeOut = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
  