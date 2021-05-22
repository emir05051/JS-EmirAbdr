
const mock = () => {
  let sections = createArray(index => [
    $("h1", {"id": "h" + (index + 1)}, "Header " + (index + 1)),
    $("section", {
      style: {
        height: randomInt(500, 2000) + "px"
      }
    })
  ]) (10);

  document.body.append(...sections.flat());

};

window.addEventListener("load", () => {

  mock();



// Wikipedia

  const headers = document.getElementsByTagName("h1");
  const wrap = $("div", {
    className: "wrap"
  })
  const ol = $("ol", {})
  console.log()
  Array.from(headers).forEach((element,index) => {
    let li = $("li", {}, $("a", {"href": "#h" + (index + 1)}, "Header " + (index + 1)))
    ol.append(li)
    console.log(li)
  })
  
  wrap.append(ol)
  document.body.children  [0].append(wrap)
  
  
  









  const documentHeight = document.body.offsetHeight - window.innerHeight;

  const headerPositions = Array.from(document.querySelectorAll("h1")).map(element => element.offsetTop);

  console.log(headerPositions);

  const checkpoints = headerPositions.map(position => 
    $("div", { 
        className: "progress-bar__checkpoint",
        style: {
          left: (position * 100 / documentHeight) + "%"
        },
        onclick: () => {
          // window.scrollBy - прокручивает НА Y пикселей от текущей позиции скорла 
          window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth"
          });
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
    
    let lastIndex = headerPositions.findIndex(position => window.scrollY < position);
    if (lastIndex < 0) {
      lastIndex = checkpoints.length;
    }


    checkpoints.forEach((checkpoint, index) => {
      if (index < lastIndex) {
        checkpoint.classList.add("progress-bar__checkpoint_active");
      } else {
        checkpoint.classList.remove("progress-bar__checkpoint_active");
      }
    })


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