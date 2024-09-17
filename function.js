greet();
function greet(name) {
  return `Hello, ${name}!`;
}

const hello = () => {
  return `Hello, ${name}!`;
};

const animal = {
  name: "Buddy",
  bark: function bark() {
    return console.log(`${this.name} barks!`);
  },
};

animal.bark();
