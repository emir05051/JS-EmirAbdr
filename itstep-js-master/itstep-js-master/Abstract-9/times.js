// requestAnimationFrame

// setTimeout setInterval

console.log("start");

const intervalId = setInterval(() => {
  console.log("Interval");
}, 2000);



setTimeout(() => {
  clearInterval(intervalId);

  console.log("stop");
}, 6000);
