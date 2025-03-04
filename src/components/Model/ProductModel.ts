import { IProductItem } from "../../types";

export interface IProductModel {
  productCards: IProductItem[];
  selectedСard: IProductItem;
  setPreview(item: IProductItem): void;
}

export class ProductModel implements IProductModel {
  productCards: IProductItem[];
  selectedСard: IProductItem;
  setPreview(item: IProductItem): void {
    throw new Error("Method not implemented.");
  }
}