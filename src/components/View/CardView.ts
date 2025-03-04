import { IProductItem } from "../../types";

export interface ICard {
  render(data: IProductItem): HTMLElement;
}

export class Card implements ICard {
  render(data: IProductItem): HTMLElement {
    throw new Error("Method not implemented.");
  }
}