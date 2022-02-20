function initCarousel() {
  const slider = document.querySelector('.carousel');
  const sliderInner = document.querySelector('.carousel__inner');
  const slides = sliderInner.querySelectorAll('.carousel__slide');
  const arrNext = document.querySelector('.carousel__arrow_right');
  const arrPrev = document.querySelector('.carousel__arrow_left');

  let width = slides[0].offsetWidth;
  let step = 0;

  arrPrev.style.display = 'none';

  slider.addEventListener('click', e => {
    if (e.path.includes(arrNext)) {
      --step;
    } else if (e.path.includes(arrPrev)) {
      ++step;
    }

    switch (step) {
    case 0:
      arrPrev.style.display = 'none';
      break;
    case -(slides.length - 1):
      arrNext.style.display = 'none';
      break;
    default:
      arrNext.style.display = '';
      arrPrev.style.display = '';
    }

    sliderInner.style.transform = 'translateX(' + width * step + 'px)';
  });
}
