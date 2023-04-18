import { Dog } from "./09-protected";

// function getValue(value: unkown) {
//   return value;
// }

// function getValue(value: string | number) {
//   return value;
// }

// is posible to change the name of GenericType
// you can place any name  <myType> <a> <foo> <bar>
//however the convention is to place a letter "T" like this <T>
function getValue<GenericType>(value: GenericType) {
  return value;
}

getValue<number>(2345).toFixed();
getValue<string>('LKHBHKJ').toLowerCase();
getValue<number[]>([1,2,3]);


const firulais = new Dog('Firulais', 'Charlie');
getValue<Dog>(firulais).move
