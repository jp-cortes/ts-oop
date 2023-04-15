export class MyDate {

  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9,//the underscore is a convention to represent a private value
     ) {}

  //this method is public
 public printFormat(): string {
  const day = this.addPadding(this._day);
  const month = this.addPadding(this._month);
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
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {// getters must return a value
    // with a method is posible to get access
    return this._day;
  }

  get isLeapYear() {// getters must return a value
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

get month() {
  return this._month;
}
//setter need a parameter
set month(newValue: number) {//setters are void cannot return a value
  if(newValue >=1 && newValue <= 12) {
    this._month = newValue;
  } else {
    throw new Error("That is not  a real month");
  }
}

}

const myDate = new MyDate(1999, 7, 9);
console.log(myDate.printFormat());// 09/07/1999
myDate.month = 78;
console.log('This wil not be shown in console', myDate.month);
