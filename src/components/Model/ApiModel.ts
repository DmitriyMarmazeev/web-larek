import { IOrderLot, IOrderResult, IProductItem } from '../../types';
import { Api, ApiListResponse } from '../base/api';

export interface IApiModel {
  cdn: string;
  items: IProductItem[];
  getListProductCard: () => Promise<IProductItem[]>;
  postOrderLot: (order: IOrderLot) => Promise<IOrderResult>;
}

export class ApiModel extends Api implements IApiModel {
  cdn: string;
  items: IProductItem[];

  constructor(cdn: string, baseUrl: string, options?: RequestInit) {
    super(baseUrl, options);
    this.cdn = cdn;
  }

  getListProductCard(): Promise<IProductItem[]> {
    return this.get('/product')
              .then((data: ApiListResponse<IProductItem>) =>
                data.items.map((item) => ({
                  ...item,
                  image: this.cdn + item.image,
                }))
              );
  }

  postOrderLot(order: IOrderLot): Promise<IOrderResult> {
    return this.post(`/order`, order)
              .then((data: IOrderResult) => data);
  }
}