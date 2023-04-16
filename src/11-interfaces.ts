export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disConnect(): void;
  isConnected(name: string): boolean;

}

//looks like inheritance but is not
//implement is a contract
//states our class has to acomplish a standard
// in this case that standard is the interface
class PostgresDriver implements Driver {
  // super(); will not work cause is not inheritance
  constructor(
    public database: string,
    public password: string,
    public port: number,
    private host: number,// onces you a commplish the contract you may add your own parameters
  ) {

  }
  connect(): void {
   //code
  }
  disConnect(): void {
   //code
  }
  isConnected(name: string): boolean {
   //code
   return true;
  }
}

class OracleDriver implements Driver {

constructor(
  public database: string,
  public password: string,
  public port: number,
  private host : number,// onces you a commplish the contract you may add your own parameters

) {}

  connect(): void {
    //code
  }
  disConnect(): void {
    //code
  }
  isConnected(name: string): boolean {
    //code
     return true;
  }

}
