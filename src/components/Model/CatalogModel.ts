import { IProductItem } from "../../types";

export interface ICatalogModel {
  productCards: IProductItem[];
  selectedСard: IProductItem;
  setPreview(item: IProductItem): void;
}

export class CatalogModel implements ICatalogModel {
  productCards: IProductItem[];
  selectedСard: IProductItem;
  setPreview(item: IProductItem): void {
    throw new Error("Method not implemented.");
  }
}