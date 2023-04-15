class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along');
  }

  greetings() {
    return `Hello, i'm ${this.name}`;
  }

 protected doSomething() { // allows inheritance
  console.log('Doing something');
  }

 private dancing() {// does not allow inheritance
  console.log('Doing something');
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
      console.log(`woff! ${this.name}`); //protected allows access from father
    }
    this.doSomething();// protected allows access from father
  }

move(): void {
    console.log('Moving the tail');
    super.move();// protected allow access from father
    // super.dancing()// private does not allow access at all
}
}

const firulais = new Dog('Firulais', 'Tommy');
firulais.move();
console.log(firulais.greetings());
firulais.woof(7);
console.log(firulais.owner);
// firulais.doSomething(); // protected does not allow access from outside
