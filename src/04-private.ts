export class MyDate {
  year: number;
  month: number;
  private day: number; //unable to access out site of the class

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }
//unable to access out site of the class
 private addPadding(value: number) {
    if(value < 10) {
      return `0${value}`;
    }
     return `${value}`;
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


  getDay() {
    // with a method is posible to get access
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());// 09/07/1993


// console.log(myDate.day);//throw an error
// myDate.addPadding(12);// throw an error
