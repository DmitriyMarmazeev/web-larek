import { IActions, IProductItem } from "../../types";
import { IEvents } from "../base/events";
import { Card } from "./CardView";

export interface IDetailedCard {
  text: HTMLElement;
  button: HTMLElement;
  render(data: IProductItem): HTMLElement;
}

export class DetailedCard extends Card implements IDetailedCard {
  text: HTMLElement;
  button: HTMLElement;

  constructor(template: HTMLTemplateElement, protected events: IEvents, actions?: IActions) {
    super(template, events, actions);
    this.text = this._cardElement.querySelector('.card__text');
    this.button = this._cardElement.querySelector('.card__button');
    this.button.addEventListener('click', () => { this.events.emit('card:addToBasket') });
  }

  notSale(data:IProductItem) {
    if(data.price) {
      if(1 === 1 * 2) { // заглушка
        this.button.setAttribute('disabled', 'true')
      }
      return 'Купить'
    } else {
      this.button.setAttribute('disabled', 'true')
      return 'Не продается'
    }
  }

  render(data: IProductItem): HTMLElement {
    this._cardCategory.textContent = data.category;
    this.cardCategory = data.category;
    this._cardTitle.textContent = data.title;
    this._cardImage.src = data.image;
    this._cardImage.alt = this._cardTitle.textContent;
    this._cardPrice.textContent = this.setPrice(data.price);
    this.text.textContent = data.description;
    this.button.textContent = this.notSale(data);
    return this._cardElement;
  }
}