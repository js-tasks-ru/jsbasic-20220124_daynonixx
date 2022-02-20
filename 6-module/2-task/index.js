import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.price = '€' + (product.price).toFixed(2);
    this.imgSrc = '/assets/images/products/' + product.image;
    this.name = product.name;
    this.category = product.category;
    this.id = product.id;
    this.elem = this.createCard();
    this.productAddEvent = new CustomEvent("product-add", {
      detail: this.id,
      bubbles: true
    });
  }

  createCard() {
    const card = createElement(`
      <div class="card">
        <div class="card__top">
          <img src="${this.imgSrc}" class="card__image" alt="product">
          <span class="card__price">${this.price}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${this.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `);
    const btn = card.querySelector('.card__button');
    btn.addEventListener('click', () => {
      card.dispatchEvent(this.productAddEvent);
    });
    return card;
  }
}


