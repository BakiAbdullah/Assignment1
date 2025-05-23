# Topic 1: Differences Between Interfaces and Types in TypeScript.

When working with TypeScript, We can define the shape of our data with `interface` and `type`. There are some key differences of those two and both of them have their own uniqueness.

---

## 🔹 1. Handling data types
When it comes to handling primitive data types, `type` is always there. Whereas `interface` can shape non primitive data types very nicely.

## 🔹 2. Extending and Merging
Interfaces support declaration merging, where multiple interfaces with the same name are merged into a single interface. Types do not support this.

with the help of `interface` we can use extends keyword. while types use intersection types (&)

## 🔹 3. Errror messages
Interfaces can provide more descriptive error messages in some cases, particularly when dealing with object shapes.





# Topic 2: The keyof keyword in TypeScript with example. 

keyof is a keyword in TypeScript which is used to extract the key type from an object type. `keyof` takes an object type and returns a union of its keys.

## Some usecases of keyof with example
```ts
type Person1 = {
  name: string;
  age: number;
};

type PersonKey = keyof Person1;
// result: "name" | "age"



