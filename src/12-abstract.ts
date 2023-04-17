import { Animal, Dog } from "./09-protected";

//the word abstract in class Anima 09-Protectes.ts
//prevents creating instances from abstract classes

// const animal = new Animal('elite'); //type script wil not allow to work
// animal.greetings();

const firulais = new Dog('Firulais', 'Tommy');
firulais.greetings();
firulais.woof(2);
