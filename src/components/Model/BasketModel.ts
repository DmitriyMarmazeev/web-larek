import { IProductItem } from "../../types";

export interface IBasketModel {
  basketProducts: IProductItem[];
  getCounter: () => number;
  getSumAllProducts: () => number;
  setSelectedСard(data: IProductItem): void;
  deleteCardToBasket(item: IProductItem): void;
  clearBasketProducts(): void
}

export class BasketModel implements IBasketModel {
  basketProducts: IProductItem[];
  getCounter: () => number;
  getSumAllProducts: () => number;
  setSelectedСard(data: IProductItem): void {
    throw new Error("Method not implemented.");
  }
  deleteCardToBasket(item: IProductItem): void {
    throw new Error("Method not implemented.");
  }
  clearBasketProducts(): void {
    throw new Error("Method not implemented.");
  }
}