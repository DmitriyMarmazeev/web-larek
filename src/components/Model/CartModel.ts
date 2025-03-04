import { IProductItem } from "../../types";

export interface ICartModel {
  getCounter: () => number;
  getTotalSumProducts: () => number;
  setSelectedCard(data: IProductItem): void;
  deleteCardToBasket(item: IProductItem): void;
  clearBasketProducts(): void
}

export class CartModel implements ICartModel {
  protected _cartProducts: IProductItem[];

  constructor() {
    this._cartProducts = [];
  }

  set basketProducts(data: IProductItem[]) {
    this._cartProducts = data;
  }

  get basketProducts() {
    return this._cartProducts;
  }

  getCounter() {
    return this._cartProducts.length;
  }

  getTotalSumProducts() {
    let total = 0;
    this._cartProducts.forEach(item => {
      total = total + item.price;
    });
    return total;
  }

  setSelectedCard(data: IProductItem) {
    this._cartProducts.push(data);
  }

  deleteCardToBasket(item: IProductItem) {
    const index = this._cartProducts.indexOf(item);
    if (index >= 0) {
      this._cartProducts.splice(index, 1);
    }
  }

  clearBasketProducts() {
    this._cartProducts = []
  }
}