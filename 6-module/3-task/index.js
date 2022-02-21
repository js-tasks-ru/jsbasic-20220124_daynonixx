import createElement from '../../assets/lib/create-element.js';


export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render(this.slides);

    this.controller();
  }

  render(slides) {
    const html = createElement(`<div class="carousel"></div>`);
    const arrNext = createElement(`
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
    `);
    const arrPrev = createElement(`
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    `);
    const sliderBody = createElement(`<div class="carousel__inner"></div>`);

    for (const slide of slides) {
      const renderedSlide = this.createSlide(slide);
      sliderBody.append(renderedSlide);
    }

    html.append(arrNext);
    html.append(arrPrev);
    html.append(sliderBody);

    this.arrNext = arrNext;
    this.arrPrev = arrPrev;
    this.sliderBody = sliderBody;

    return html;
  }

  createSlide(slide) {
    const price = '€' + slide.price.toFixed(2);
    const productAddEvent = new CustomEvent("product-add", {
      detail: slide.id,
      bubbles: true
    });
    const html = createElement(`
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">${price}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `);
    const btn = html.querySelector('.carousel__button');
    btn.addEventListener('click', () => {
      btn.dispatchEvent(productAddEvent);
    });

    return html;
  }

  controller() {
    let step = 0;
    this.arrPrev.style.display = 'none';

    this.elem.addEventListener('click', e => {
      const width = this.sliderBody.offsetWidth;

      if (e.path.includes(this.arrNext)) {
        --step;
      } else if (e.path.includes(this.arrPrev)) {
        ++step;
      }

      switch (step) {
      case 0:
        this.arrPrev.style.display = 'none';
        break;
      case -(this.slides.length - 1):
        this.arrNext.style.display = 'none';
        break;
      default:
        this.arrNext.style.display = '';
        this.arrPrev.style.display = '';
      }

      this.sliderBody.style.transform = 'translateX(' + width * step + 'px)';
    });
  }

}
