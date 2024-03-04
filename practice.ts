// /*
//   Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
// */

// // interface Props {
// //   title: string
// // }

// // class Component<T extends Props> {
// //   constructor (public props:T) {

// //   }
// // }

// // class Page extends Component<Props> {
// //   pageInfo () {
// //     console.log(this.props.title);
// //   }
// // }

// import { IPerson, IPilot } from "./type";

// class Pilot implements IPerson, IPilot {
//   constructor(public name: string, public age: number) {
//     if (this.age < 28) {
//       throw new Error("Pilot too young");
//     }
//   }

//   greet(phrase: string): void {
//     console.log(phrase + " " + this.name);
//   }

//   flyMessage(): void {
//     console.log("Літак набрав висоту, всім приємного польоту!");
//   }

//   setAutopilot(): void {
//     console.log("Автопілот увімкнено.");
//   }
// }

// abstract class Plane {
//   protected pilot?: IPilot;

//   public sitInPlane(pilot: IPilot): void {
//     this.pilot = pilot;
//   }

//   public abstract startEngine(): boolean;
// }

// class Boeing extends Plane {
//   public startEngine(): boolean {
//     if (!this.pilot) {
//       throw new Error("No pilot in cabin");
//     }
//     // Розігріваємо реактивні турбіни.
//     console.log("Запуск турбин");

//     this.pilot.flyMessage();
//     return true;
//   }
// }

// const boeing = new Boeing();
// const pilot = new Pilot("Anthony", 32);

// // Капітан вітає пасажирів на трапі.
// pilot.greet("Вас вітає капітан корабля");

// // Займає місце пілота.
// boeing.sitInPlane(pilot);

// // Запускаємо двигуни.
// boeing.startEngine();

// export { Boeing };

// // export {};

// INCAPSULATION

class MyClass {
  private protectedMethod() {
    return "Something";
  }

  public publicMethod() {
    return this.protectedMethod();
  }
}

// EXTENDS

class MyClassA {
  public myMethod() {
    return "I`m class A";
  }
}

class MyClassB extends MyClassA {}

let bi = new MyClassB();
console.log(bi.myMethod());

// POLIMORPHISM

class Animal {
  public say() {
    return "Animal say something";
  }
}

class Cat extends Animal {
  public say() {
    return "Cat say Meow";
  }
}

class Dog extends Animal {
  public say() {
    return "Dog say Woof";
  }
}

let animal: Animal = new Cat();
animal.say();

animal = new Dog();
animal.say();

// ABSTRACTION

class ClassA {
  private process1() {
    return 1;
  }
  private process2() {
    return 2;
  }
  private process3() {
    return 3;
  }

  public superProcess() {
    return this.process1() + this.process2() + this.process3();
  }
}

// OOP PRINCIPLES (SOLID)

// BAD
class User {
  public name: string;
  public pass: string;

  constructor(name: string, pass: string) {
    this.name = name;
    this.pass = pass;
  }

  public save(): void {}

  public sendEmail(message: string): void {}
}

// GOOD
class User1 {
  public name: string;
  public pass: string;
  constructor(name: string, pass: string) {
    this.name = name;
    this.pass = pass;
  }

  public save(): void {}
}

class SendEmail {
  public sendEmail(user: User, message: string): void {}
}

// OCP (Open/Closed principle)

interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  public radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class AreaCalculator {
  public calculate(rectangle: Rectangle): number {
    return rectangle.width * rectangle.height;
  }
}

// METHODS

// class House {
//   street: string;

//   constructor(n: string) {
//     this.street = n;
//   }

//   showAddress(this: House) {
//     console.log("Address" + this.street);
//   }
// }

// const house = new House("Middle Earth");

// house.showAddress();

// const houseCopyError = { showAddress: house.showAddress };

// houseCopyError.showAddress();

// const houseCopy = { street: "Dummy", showAddress: house.showAddress };

// houseCopy.showAddress();

// MODS public, private, protected

// class A {
//   protected someProperty = "STR";
// }

// class B extends A {
//   showProperty() {
//     console.log(this.someProperty);
//   }
// }

// const a = new A();

// a.someProperty;

// const b = new B();

// b.someProperty;

// b.showProperty();

// class House {
//   private street: string;
//   private tenants: string[] = [];

//   constructor(n: string) {
//     this.street = n;
//   }

//   public showAddress(this: House) {
//     console.log("Address" + this.street);
//   }

//   public addTenant(tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants() {
//     console.log(this.tenants);
//   }
// }

// const house = new House("Middle Earth");

// house.addTenant("Anton");
// house.addTenant("Nikita");

// house.showTenants();

// house.showAddress();

// const houseCopyError = { showAddress: house.showAddress };

// houseCopyError.showAddress();

// const houseCopy = { street: "Dummy", showAddress: house.showAddress };

// houseCopy.showAddress();

// OLD METHOD

// class House {
//   private type: string;
//   private street: string;

//   constructor(type: string, street: string) {
//     this.type = type;
//     this.street = street;
//   }
// }

// NEW METHOD WITH TYPESCRIPT

// class House {
//   constructor(private readonly type: string, private street: string) {}

//   changeType(type: string) {
//     this.type = type; // Помилка: Неможливо змінити властивість "type", оскільки вона "readonly".
//   }
// }

// class House {
//   constructor(private readonly type: string, private street: string) {}
// }

// class StoneHouse extends House {
//   constructor(street: string) {
//     super("stone", street);
//   }
// }

// const stoneHouse = new StoneHouse("Stone-World");

// class House {
//   private tenants: string[] = [];

//   constructor(private readonly type: string, private street: string) {}

//   public showAddress(this: House) {
//     console.log("Address" + this.street);
//   }

//   public showType(this: House) {
//     console.log("House Type" + this.type);
//   }

//   public addTenant(tenant: string) {
//     this.tenants.push(tenant);
//   }

//   public showTenants() {
//     console.log(this.tenants);
//   }
// }

// class StoneHouse extends House {
//   private chargeOfTheHouse: string;

//   constructor(street: string, generalTenant: string) {
//     super("stone", street);
//     this.chargeOfTheHouse = generalTenant;
//     this.addTenant(generalTenant);
//   }

//   public showTenants(): void {
//     console.log("General" + this.chargeOfTheHouse);

//     super.showTenants();
//   }
// }

// const stoneHouse = new StoneHouse("Stone world", "Max");

// stoneHouse.addTenant("Anton");

// stoneHouse.addTenant("Nikita");

// stoneHouse.showTenants();

// stoneHouse.showType();

// stoneHouse.showAddress();

// // GETTER/SETTER

// type PersonInformation = {
//   firstName?: string;
//   lastName?: string;
// };

// class Person {
//   private personInfo: PersonInformation = {};

//   set firstName(value: string) {
//     console.log("First name added!");

//     this.personInfo.firstName = value;
//   }

//   set lastName(value: string) {
//     console.log("Last name added!");

//     this.personInfo.lastName = value;
//   }

//   get info() {
//     const { personInfo } = this;

//     return `${personInfo.lastName} ${personInfo.firstName}`;
//   }
// }

// const person = new Person();

// person.lastName = "Pupkin";

// person.firstName = "Vasil";

// console.log(person.info);

// // STATICS

// class UseStatic {
//   private static count = 0;

//   constructor() {
//     UseStatic.count += 1;
//   }

//   public static isStaticMethod() {
//     console.log("Run static method");
//   }

//   public showCount() {
//     console.log(UseStatic.count);
//   }
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// obj3.showCount();

// UseStatic.isStaticMethod();

// // ABSTRACT CLASSES

// abstract class Plane {
//   protected pilotInCabine: boolean = false;

//   public sitInPlane(): void {
//     this.pilotInCabine = true;
//   }

//   public abstract startEngine(): boolean;
// }

// class Maize extends Plane {
//   public startEngine(): boolean {
//     return true;
//   }
// }

// class Boeing extends Plane {
//   /**
//    * startEngine
//    */
//   public startEngine(): boolean {
//     return true;
//   }
// }

// class BrokenPlane extends Plane {}

// INTERFACES

// interface Person {
//   firstName: string;
//   lastName: string;
//   age?: number;
// }

// function greet(person: Person) {
//   console.log(`Hello, ${person.firstName} ${person.lastName}`);
// }

// const john: Person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// greet(john)

// interface IPerson {
//   name: string
//   age: number
//   greet(phrase: string): void
// }

// let user: IPerson

// user = {
//   name: 'Anthony',
//   age: 15,

//   greet(phrase) {
//     console.log(phrase + ' ' + this.name)
//   }
// }

// user.greet('Hello everybody, i`m')

// type ItemType = {
//   name: string
// }

// class Catalog {
//   showCatalog(items: ItemType[]) {
//     items.forEach((item) => {
//       console.log(item.name)
//     })
//   }
// }

// class Items {
//   private items: ItemType[] = []

//   setItem(name: string): void{
//     this.items.push({name})
//   }

//   getItems(): ItemType[] {
//     return this.items
//   }
// }

// const items = new Items()
// const catalog = new Catalog()

// items.setItem('Catalog1')
// items.setItem("Catalog2");
// items.setItem("Catalog3");

// catalog.showCatalog(items.getItems())

// class DB {
//   connection(): void {
//     console.log("DB connected");
//   }
// }

// class Server {
//   constructor(private database: DB) {}

//   public init(): void {
//     this.database.connection();
//   }
// }

// const db = new DB()
// const server = new Server(db)
// server.init()

class Person {
  constructor(public name: string) {}
}

class Home {
  public guests: Person[] = [];

  addGuest(guest: Person): void {
    this.guests.push(guest);
  }
}

const home = new Home();

const guest1 = new Person("Max");
const guest2 = new Person("Anton");
const guest3 = new Person("Nikita");

home.addGuest(guest1);
home.addGuest(guest2);
home.addGuest(guest3);
