
// generic interface

 interface cruchInterface<T,U= null> {
    name:string;
    husband:T,
    wife?:U
 }

 const crush1:cruchInterface<boolean,string> = {
    name:"jjjj",
    husband:true,
    wife:"ace"
 }
 const crush2:cruchInterface<string> = {
    name:"jjjj",
    husband:"jhhggh"
 }

 console.log(crush1,crush2);