export interface IModal {
  open(): void;
  close(): void;
  render(): HTMLElement
}