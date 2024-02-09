// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: any;
let callback = (a: number): number => {
  return 100 + a;
}; // А якщо не явно вказати в аргумент тип any - тип буде void для функції

export {};
