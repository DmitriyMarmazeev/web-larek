import { IActions, IProductItem } from "../../types";

export interface IDetailedCard {
  text: HTMLElement;
  button: HTMLElement;
  render(data: IProductItem): HTMLElement;
}