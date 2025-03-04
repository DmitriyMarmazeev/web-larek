import { IOrderLot, IOrderResult, IProductItem } from '../../types';
import { Api } from '../base/api';

export interface IApiModel {
  cdn: string;
  items: IProductItem[];
  getListProductCard: () => Promise<IProductItem[]>;
  postOrderLot: (order: IOrderLot) => Promise<IOrderResult>;
}

export class ApiModel extends Api implements IApiModel {
  cdn: string;
  items: IProductItem[];
  getListProductCard: () => Promise<IProductItem[]>;
  postOrderLot: (order: IOrderLot) => Promise<IOrderResult>;
}