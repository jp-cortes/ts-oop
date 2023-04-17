export class MyService {
  static instance: MyService | null = null;

  private constructor(private name: string ) {}

  getName() {
    return this.name;
  }


  static create(name: string) {
    if(MyService.instance === null) {
      console.log('Shoud works only once');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService = MyService.create('service1');
console.log(myService.getName());//service1
const myService2 = MyService.create('service2');
console.log(myService2.getName());//service1
const myService3 = MyService.create('service3');
console.log(myService3.getName());//service1

console.log(myService === myService2)// true
