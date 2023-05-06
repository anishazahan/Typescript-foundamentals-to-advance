

function add(num1:number,num2:number):number{
    return num1 + num2
}
add(2,2)


const addArr = (num1:number,num2:number):number =>{
    return num1 + num2 
}
addArr(3,3)

// call back

 const square = [2,3,4]
 square.map((elem :number )=> elem*elem)

 // kono functionk obj er modda use korla take method bole
 // this keyword arrow function a kaz kore na


 type Person = {
    balance: number;
    getBalance(money: number): number;
 }

 const person:Person= {
    balance:5,
    getBalance (money:number){
      return  this.balance + money
    }
 }