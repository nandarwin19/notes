html and css intermediate

"Static Positioning: The default positioning for all HTML elements. Elements position according to the document flow, ignoring top, right, bottom, left properties.

Relative Positioning: Similar to static, but elements can be moved relative to their normal position using top, right, bottom, left properties. Does not affect the position of other elements."

## Filter vs Map vs Reduce

(image1)

### JavaScript Array Methods

1. **`Array.prototype.map()`**:

   - **Purpose**: Transforms each element in an array and returns a new array with the transformed elements.
   - **Use Case**: When you need to apply a function to all elements of an array and get a new array with the results.
   - **Example**:
     ```javascript
     const numbers = [1, 2, 3];
     const doubled = numbers.map((n) => n * 2); // [2, 4, 6]
     ```

2. **`Array.prototype.filter()`**:

   - **Purpose**: Creates a new array with all elements that pass the test implemented by the provided function.
   - **Use Case**: When you need to filter out elements from an array based on a condition.
   - **Example**:
     ```javascript
     const numbers = [1, 2, 3, 4];
     const evens = numbers.filter((n) => n % 2 === 0); // [2, 4]
     ```

3. **`Array.prototype.reduce()`**:

   - **Purpose**: Executes a reducer function on each element of the array, resulting in a single output value.
   - **Use Case**: When you need to accumulate a value from elements of an array (e.g., sum, product, or any other aggregation).
   - **Example**:

     ```javascript
     const numbers = [1, 2, 3, 4];
     const sum = numbers.reduce((acc, n) => acc + n, 0); // 10
     ```

     ### JavaScript Object Basics

**Overview**: JavaScript objects are collections of related data and functionality, defined using key-value pairs.

**Creating Objects**:

- **Empty Object**:
  ```javascript
  const person = {};
  ```
- **Object with Properties and Methods**:
  ```javascript
  const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio() {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf() {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
  };
  ```

**Accessing Properties and Methods**:

- **Dot Notation**:
  ```javascript
  person.name; // ["Bob", "Smith"]
  person.age; // 32
  person.bio(); // "Bob Smith is 32 years old."
  person.introduceSelf(); // "Hi! I'm Bob."
  ```
- **Bracket Notation**:
  ```javascript
  person["age"]; // 32
  person["name"][0]; // "Bob"
  person["bio"](); // "Bob Smith is 32 years old."
  ```

**Modifying and Adding Properties**:

- **Update Existing Properties**:
  ```javascript
  person.age = 45;
  person["name"][1] = "Cratchit";
  ```
- **Add New Properties**:
  ```javascript
  person.eyes = "hazel";
  person.farewell = function () {
    console.log("Bye everybody!");
  };
  ```

**Constructors**:

- **Function Constructor**:
  ```javascript
  function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }
  const salva = new Person("Salva");
  salva.introduceSelf(); // "Hi! I'm Salva."
  ```

**Using `this`**:

- `this` refers to the object on which the method is called, allowing methods to work across multiple object instances.

**Built-in Objects**:

- Many JavaScript features are objects, such as `String`, `Array`, and `Document`. For example:

  ```javascript
  const myString = "Hello, world!";
  myString.split(","); // ["Hello", " world!"]

  const myDiv = document.createElement("div");
  const myVideo = document.querySelector("video");
  ```

This concise overview introduces the basics of creating and working with objects in JavaScript, including accessing and modifying properties, using constructors, and understanding `this`.
