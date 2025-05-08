function formatString(input: string, toUpper?: boolean) {
  return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
}
//------->

interface Item {
  title: string;
  rating: number;
}

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

const books: Item[] = [
  { title: "The Alchemist", rating: 4.5 },
  { title: "1984", rating: 3.8 },
  { title: "The Great Gatsby", rating: 5.0 },
];
//------->

function concatenateArrays<T>(...arrays: T[]): T[] {
  return arrays.flat() as T[];
}
//------->

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo() {
    return console.log(`Make: ${this.make}, Year: ${this.year} `);
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(model: string, year: number, make: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return console.log(`Model: ${this.model}`);
  }
}
const myCar = new Car("Mustang Gt", 2010, "Ford");
// -------->

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}
// -------->

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  return products.reduce((prevProduct, currentProduct) => {
    return currentProduct.price > prevProduct.price
      ? currentProduct
      : prevProduct;
  });
}

const products = [
  { name: "Watch", price: 90 },
  { name: "Macbook", price: 250 },
  { name: "Headphone", price: 40 },
];
// -------->

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
// -------->

async function squareAsync(params: number): Promise<number> {
  return await new Promise((resolve, reject) => {
    if (params < 0) {
      reject(new Error("Error: Negative number not allowed"));
    } else {
      setTimeout(() => {
        resolve(params * params);
      }, 1000);
    }
  });
}
// -------->
