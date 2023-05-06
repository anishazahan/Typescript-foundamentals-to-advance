
type Operation_Type ={
    (x:number,y:number) : number;
}

const calculate = (num1:number,num2:number,operation:Operation_Type) =>{
    return operation(num1,num2)
}
calculate(3,3,(x,y)=>x+y)
calculate(3,3,(x,y)=>x-y)
calculate(3,3,(x,y)=>x*y)