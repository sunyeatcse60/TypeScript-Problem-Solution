# TypeScript-Problem-Solution



# TypeScript: Interfaces vs Types & `keyof` Keyword

## Differences Between `interface` and `type` in TypeScript

| Feature                  | `interface`                                | `type`                                      |
|--------------------------|--------------------------------------------|---------------------------------------------|
| **Extending**            | Can extend interfaces and types            | Can extend types using intersection `&`     |
| **Merging**              | interfaces support declaration merging     | types cannot be merged                      |
| **Use with primitives**  | Cannot define primitives directly          | Can define union, intersection, primitives  |
| **Computation**          | Less flexible for complex computations     | Supports mapped types, conditional types    |
| **Recommended for**      | Object shapes and class contracts          | Complex types, unions, mapped types         |

### Example of `interface`
```ts
interface Person {
  name: string;
  age: number;
}
```

### Example of `type`
```ts
type Person = {
  name: string;
  age: number;
}
```

---

##  `keyof` Keyword in TypeScript

The `keyof` operator extracts the **keys of a type** as a union of string literal types.

### Example:
```ts
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

type PersonKeys = keyof Person;
```

### Generic Function Using `keyof`
```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const student: Person = { name: "Ayan", age: 21, isStudent: true };
const name = getProperty(student, "name"); 
```
