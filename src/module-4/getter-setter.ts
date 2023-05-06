
//  kono private propertyk acces korar niom

  
class BalanceAccount {
    public id:string;
    public name:string;
     private _balance:number;
  
      constructor(id:string,name:string,balance:number){
          this.id = id;
          this.name= name;
          this._balance=balance;
      }


        //   set getter

        get checkBalance():number{
            return this._balance
        }
  
    //   checkBalance ():number{
    //       return this._balance
    //   }


     // setter  =return type dewa zaba na ,konokisu return kore na

      set addBalance(amount:number){
        this._balance = this._balance + amount;
           
      }


    //   addBalance (amount:number):number{
    //       const add_Balance = this._balance + amount
    //       return add_Balance;
    //   }
  }
  
  const myAccount = new BalanceAccount("123","anisha",200)
  
  
//   console.log(myAccount.addBalance(300));

console.log(myAccount.checkBalance);
myAccount.addBalance = 500
console.log(myAccount.checkBalance);