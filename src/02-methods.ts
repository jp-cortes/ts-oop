export class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
  }

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
