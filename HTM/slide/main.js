// margin, padding
// position
// transform: translate


let containerWidth = 0;
let container = null;

let block = null;
// const dx = 200; // шаг, на котоырй мы смещаем элемент
// let x = 0; // реальная позицию элемента

let currentSlide = 0;
let slides = [];


const updateContainerWidth = () => {
  const style = window.getComputedStyle(container); // Получаем расчитанный текущий стиль элемента
  
  const paddingLeft = parseInt(style.paddingLeft);
  const paddingRight = parseInt(style.paddingRight);
  
  containerWidth = container.clientWidth - paddingRight - paddingLeft
}


const moveSlide = (direction) => {
  slides[currentSlide].classList.remove("slide_active");
  currentSlide = Math.max(0, Math.min(currentSlide + direction, slides.length - 1));
  slides[currentSlide].classList.add("slide_active");
}

const upadatePostion = () => {

  // console.log(container.getBoundingClientRect()); // Получаем объект с размерами и координатами элемента  
  // clientWidth | clientHeight - размер contentBox + padding
  // offsetWidth | offsetHeight - размер contentBox + padding + scrollBars + borderWidth

  // const prevContainerWidth = containerWidth;

  updateContainerWidth();

  // const halfBlockWidth = block.offsetWidth / 2;

  const min = containerWidth - block.offsetWidth;
  // const max = containerWidth - block.offsetWidth;

  
  const rect = slides[currentSlide].getBoundingClientRect();

  console.log(slides[currentSlide].getBoundingClientRect());

  //TODO: Относительно левого верхнего угла viewport
  let x = -rect.left;

  console.log(x, min);

  x = Math.max(min, Math.min(0, x));

  // x *= containerWidth / prevContainerWidth;

  console.log(x);
  
  block.style.transform = "translateX(" + x + "px)";
}


const createSlide = (index) => {
  return $("div", { 
    className: "slide", 
    style: {
      width: randomInt(150, 350) + "px",
      height: randomInt(100, 250) + "px",
    }
  }, index);
}


window.addEventListener("load", () => {

  slides = createArray(createSlide) (10);

  block = $("div", {
    className: "block",
    // style: {
    //   transform: "translateX(-50px)",
    // }
  }, ...slides);

  container = $("div", {
    className: "container"
  }, block);



  const buttonLeft = $("div", {
    className: "button button_left",
    onclick: () => {
      moveSlide(-1);
      upadatePostion();
    }
  });
  
  const buttonRight = $("div", {
    className: "button button_right",
    onclick: () => {
      moveSlide(1);
      upadatePostion();
    }
  });

  const buttons = $("div", {
    className: "buttons",
  }, buttonLeft, buttonRight);


  document.body.append(buttons, container);
  
  container.style.height = block.offsetHeight + "px";
  updateContainerWidth();

  moveSlide(0);
});

window.addEventListener("resize", () => {
  upadatePostion();
});