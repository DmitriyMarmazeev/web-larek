import { IProductItem } from "../../types";

export interface IProductModel {
  productCards: IProductItem[];
  selectedСard: IProductItem;
  setPreview(item: IProductItem): void;
}