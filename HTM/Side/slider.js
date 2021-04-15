// 1. от html 
// 2. от js 

/**
 * 1. Управление клавиатурой
 * 2. Пролистывание мышкой
 * 3* Луп
 */

class Slider {

  _container;
  _film;
  _slides;
  _options;

  _paddingLeft = 0;
  _paddingRight = 0;
  _currentIndex = 0;
  
  // const dx = 200; // шаг, на котоырй мы смещаем элемент
  // let x = 0; // реальная позицию элемента
  
  // let containerWidth = 0;
  
  // container -> film (a.k.a block) -> slides[]
  constructor(container, film, slides, options) {
    this._container = container;
    this._film = film;
    this._slides = slides;
    this._options = options;


    // TODO: очищать event listener при уничтожении слайдера
    window.addEventListener("resize", () => {
      this._upadatePostion();
    });

    this._upadatePostion();

  }

  _upadatePostion() {

    const min = this._container.clientWidth - this._film.offsetWidth - this._paddingLeft;
    const max = this._paddingRight;

    let x = -this._slides[this._currentIndex].offsetLeft + this._paddingLeft;

    x = Math.max(min, Math.min(max, x));

    // console.log(x, this._paddingLeft);
    
    this._film.style.transform = "translateX(" + x + "px)";
  }

  static fromData(data, createSlide, options = {}) {
      
    const slides = Array.from(data, (data) => 
      $("div", {
          className: "slider__slide"
        }, 
        createSlide(data)
      )
    ); 

    const film = $("div", {
      className: "slider__film",
      style: {
        position: "absolute",
        left: 0,
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        // align-items: center;
        // justify-content: center;
      }
    }, ...slides);

    const container = $("div", {
      className: "slider__container"
    }, film);



    return new Slider(container, film, slides, options);
  }

  // fromHtml(element) {

  // }

  appendTo(element) {
    element.append(this._container);
    
    // TODO: пересчитывать каждый раз, когда необходимо
    this._container.style.height = this._film.offsetHeight + "px";

    const style = window.getComputedStyle(this._container);
    this._paddingLeft = parseInt(style.paddingLeft);
    this._paddingRight = parseInt(style.paddingRight);

    this._upadatePostion();
  }

  // addSlides(data) {

  // }


  moveSlide(direction) {
    this._slides[this._currentIndex].classList.remove("slide_active");
    this._currentIndex = Math.max(0, Math.min(this._currentIndex + direction, this._slides.length - 1));
    this._slides[this._currentIndex].classList.add("slide_active");

    this._upadatePostion();
  }
  

  nextSlide() {
    this.moveSlide(1);
  }

  prevSlide() {
    this.moveSlide(-1);
  }

  firstSlide() {
    this.goToSlide(0);
  }


  lastSlide() {
    this.goToSlide(this._slides.length - 1);
  }


  goToSlide(index) {
    this.moveSlide(index - this._currentIndex)
  }

  currentSlide() {
    return this._slides[this._currentIndex];
  }

  // //---
  // play() {}
  // stop() {}

}
