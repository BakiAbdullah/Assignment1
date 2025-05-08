function formatString(input: string, toUpper?: boolean) {
  if (toUpper !== false) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
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

