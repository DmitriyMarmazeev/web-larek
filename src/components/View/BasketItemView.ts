import { IProductItem } from "../../types";

export interface IBasketItem {
  basketItem: HTMLElement;
	index:HTMLElement;
	title: HTMLElement;
	price: HTMLElement;
	buttonDelete: HTMLButtonElement;
	render(data: IProductItem, item: number): HTMLElement;
}

export class BasketItem implements IBasketItem {
	basketItem: HTMLElement;
	index: HTMLElement;
	title: HTMLElement;
	price: HTMLElement;
	buttonDelete: HTMLButtonElement;
	render(data: IProductItem, item: number): HTMLElement {
		throw new Error("Method not implemented.");
	}
}