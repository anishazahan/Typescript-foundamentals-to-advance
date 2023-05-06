
// const rollNumbers1:number[] = [2,3,4,5,6]
const rollNumbers1:Array<number> = [2,3,4,5,6]


// const rollNumbers2:string[] = ["mina","rina"]
const rollNumbers2:Array<string> = ["mina","rina"]

// generic type

type GenericeTypeArray<T> = Array<T>;

const rollNumbers3:GenericeTypeArray<number> = [2,3,4,5,6]
const rollNumbers4:GenericeTypeArray<string> =["mina","rina"]


type objType = {
    name: string;
    age: number;
}

const information:GenericeTypeArray<objType> = [
    {
        name:"lima",
        age:2
    },
    {
        name:"lima2",
        age:3
    },
]

