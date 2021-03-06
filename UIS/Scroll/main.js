// debounce
// "накапливаем события" пока они не перестанут проиходить в течении N ms
const debounce = func => delay => {
  let timerId = null;

  return (...args) => {
    if (timerId === null) {
      func(...args);
    }

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args)
      timerId = null;
    }, delay);
  }
}


// throttle
// Выполнять обработчик не чаще чем раз в N ms
const throttle = func => delay => {
  let timerId = null;

  return (...args) => {
    if (timerId === null) {
      func(...args);
      timerId = setTimeout(() => {
        func(...args);
        timerId = null;
      }, delay);
    }
  };
}


const mock = () => {
  let sections = createArray(index => [
    $("h1", {}, "Header " + (index + 1)),
    $("section", {
      style: {
        height: randomInt(500, 2000) + "px"
      }
    })
  ]) (7);

  document.body.append(...sections.flat());

};

// 1. Прогесс бар 
// 2. Дозагрузка контента
// 3. Паралакс
window.addEventListener("load", () => {

  mock();

  const documentHeight = document.body.offsetHeight - window.innerHeight;

  const headerPositions = Array.from(document.querySelectorAll("h1")).map(element => element.offsetTop);

  console.log(headerPositions);

  const checkpoints = headerPositions.map(position => 
    $("div", { 
        className: "progress-bar__checkpoint",
        style: {
          left: (position * 100 / documentHeight) + "%"
        } 
      })
  );

  const progressBar = $("div", {
    className: "progress-bar__bar"
  })

  const progressContainer = $("div", {
    className: "progress-bar"
  }, progressBar, ...checkpoints);

  document.body.append(progressContainer);

  // const debouncedHandler = debounce((event) => {
  //   document.body.style.backgroundColor = "hsl(" + randomInt(0, 359) + ", 100%, 80%)";

  //   console.log(event, window.scrollX, window.scrollY);
  // }) (500);


  const throttledHandler = throttle(() => {
    console.log(window.scrollY, document.body.offsetHeight - window.innerHeight);

    progressBar.style.width = (window.scrollY * 100 / (document.body.offsetHeight - window.innerHeight)) + "%";


    // document.body.style.backgroundColor = "hsl(" + randomInt(0, 359) + ", 100%, 80%)";

    // console.log(event, window.scrollX, window.scrollY);
  }) (100);

  window.addEventListener("scroll", throttledHandler);

  // window.addEventListener("mousewheel", (event) => {
  //   console.log(event);
  // });

});