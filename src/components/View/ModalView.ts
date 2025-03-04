export interface IModal {
  open(): void;
  close(): void;
  render(): HTMLElement
}

export class Modal implements IModal {
  open(): void {
    throw new Error("Method not implemented.");
  }
  close(): void {
    throw new Error("Method not implemented.");
  }
  render(): HTMLElement {
    throw new Error("Method not implemented.");
  }
}