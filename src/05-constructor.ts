export class MyDate {

  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 9
     ) {}

  //this method is public
 public printFormat(): string {
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

  getDay() {
    // with a method is posible to get access
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());// 09/07/1993

const myDate2 = new MyDate();
console.log('() =>', myDate2.printFormat());// () => 09/07/1993

const myDate3 = new MyDate(2023);
console.log('(2023) =>', myDate3.printFormat());// (2023) => 09/07/2023

const myDate4 = new MyDate(2023, 5);
console.log('(2023 , 5) =>', myDate4.printFormat());// (2023, 5) => 09/05/2023
