export interface IFormModel {
  payment: string;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[];
  setOrderAddress(field: string, value: string): void
  validateOrder(): boolean;
  setOrderData(field: string, value: string): void
  validateContacts(): boolean;
  getOrderLot(): object;
}

export class FormModel implements IFormModel {
  payment: string;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[];
  setOrderAddress(field: string, value: string): void {
    throw new Error("Method not implemented.");
  }
  validateOrder(): boolean {
    throw new Error("Method not implemented.");
  }
  setOrderData(field: string, value: string): void {
    throw new Error("Method not implemented.");
  }
  validateContacts(): boolean {
    throw new Error("Method not implemented.");
  }
  getOrderLot(): object {
    throw new Error("Method not implemented.");
  }
}