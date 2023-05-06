
// const createArr1 = (param:string):string[] =>{
//   return [param]
// }

const createArr = <T>(param:T):T[] =>{
  return [param]
}


const createResult = createArr<string>("bangladesh");
const createResult2 = createArr<number>(5665);
console.log({createResult},{createResult2});