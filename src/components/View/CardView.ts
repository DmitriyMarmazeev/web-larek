import { IProductItem } from "../../types";

export interface ICard {
  render(data: IProductItem): HTMLElement;
}