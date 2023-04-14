export class MyDate {
  // methods or prooerties a re public by default
 public year: number;//this is public
  month: number;//this is also public by default
  day: number;//this is also public by default

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  //this method is public
 public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }
//this method is also public by default
  add(amount: number, type: 'days' | 'months' | 'years') {
    //example this is not a good way to add days, months & days
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());// 9/7/1993
myDate.add(3, 'days');
console.log(myDate.printFormat());// 12/7/1993

myDate.add(1, 'months');
// myDate.add(1, 'asasa'); error

console.log(myDate.printFormat());// 12/8/1993
console.log(myDate.day);// 12
console.log(myDate.month);// 8
console.log(myDate.year);// 1993
