import { IProductItem } from "../../types";

export interface IBasketModel {
  getCounter: () => number;
  getSumAllProducts: () => number;
  setSelectedСard(data: IProductItem): void;
  deleteCardToBasket(item: IProductItem): void;
  clearBasketProducts(): void
}

export class BasketModel implements IBasketModel {
  protected _basketProducts: IProductItem[];

  constructor() {
    this._basketProducts = [];
  }

  set basketProducts(data: IProductItem[]) {
    this._basketProducts = data;
  }

  get basketProducts() {
    return this._basketProducts;
  }

  getCounter() {
    return this._basketProducts.length;
  }

  getSumAllProducts() {
    let total = 0;
    this._basketProducts.forEach(item => {
      total = total + item.price;
    });
    return total;
  }

  setSelectedСard(data: IProductItem) {
    this._basketProducts.push(data);
  }

  deleteCardToBasket(item: IProductItem) {
    const index = this._basketProducts.indexOf(item);
    if (index >= 0) {
      this._basketProducts.splice(index, 1);
    }
  }

  clearBasketProducts() {
    this._basketProducts = []
  }
}