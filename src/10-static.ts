console.log('Math.PI', Math.PI); // 3.14159265
console.log('Math.max', Math.max(1,2,3,4,5,66,77,899,))// 899
 class MyMath {
  //static allow the parameters and metods being called without creatin an instance
   static readonly PI= 3.14;

    static max(...numbers: number[]) {
      return numbers.reduce((max, item) => max > item ? max : item);
    }
 }
//  const math = new MyMath();
//  math.pi; // static prevent htis to happends

console.log('MyMath.PI', MyMath.PI);// 3.14
console.log('MyMath.PI', MyMath.max(1,32,445,667,7,6543));//6543

const numbers = [21,5,3,6565,333333,7,6764,8,3000];
console.log('MyMath.PI', MyMath.max(...numbers));// -333333
console.log('MyMath.PI', MyMath.max(-4,-1,-6));// -1
