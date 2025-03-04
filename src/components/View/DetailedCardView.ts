import { IActions, IProductItem } from "../../types";
import { Card } from "./CardView";

export interface IDetailedCard {
  text: HTMLElement;
  button: HTMLElement;
  render(data: IProductItem): HTMLElement;
}

export class DetailedCard extends Card implements IDetailedCard {
  text: HTMLElement;
  button: HTMLElement;
}