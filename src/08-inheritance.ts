class Animal {
  constructor(public name: string) {}

  move() {
    console.log('Moving along');
  }

  greetings() {
    return `Hello, i'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(
    name:string,
    public owner: string
    ) {
      super(name);
  }

  woof(times: number): void {
    for(let index = 0; index< times; index++) {
      console.log('woff!');
    }
  }
}

const fifi =  new Animal('Fifi');
fifi.move();
console.log(fifi.greetings());

const firulais = new Dog('Firulais', 'Tommy');
firulais.move();
console.log(firulais.greetings());
firulais.woof(7);
console.log(firulais.owner);
