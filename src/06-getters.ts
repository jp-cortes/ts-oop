export class MyDate {

  constructor(
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9,//the underscore is a convention to represent a private value
     ) {}

  //this method is public
 public printFormat(): string {
  const day = this.addPadding(this._day);
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

//this method is also public by default
  add(amount: number, type: 'days' | 'months' | 'years') {
    //example this is not a good way to add days, months & days
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    // with a method is posible to get access
    return this._day;
  }

  get isLeapYear() {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  //this is an example
  // get values(): void { //cannot be void
  //   // getters must return a value
  // }
}

const myDate = new MyDate(1999, 7, 9);
console.log(myDate.printFormat());// 09/07/1999

const myDate2 = new MyDate();
myDate2.day;// 09

// myDate2.day();// cannot be call like this
// myDate2.day = 6;// cannot be modified

const myDate3 = new MyDate(2022);
console.log(myDate3.isLeapYear);// false

const myDate4 = new MyDate(2024, 5);
console.log(myDate4.isLeapYear);// true
