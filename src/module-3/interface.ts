

// type keyword er poriborta interface keyword use korbo
// interface keyword obj type er datar ketre use korbo
// function,array,obj aigular ketre interface use kora zete pare

interface User {
    roll:number;
    name:string;
}

interface user2 extends User  {
    age:number;
}

// type er ketre & use korta hobe

const user:user2 = {
    roll:77,
    name:"jj",
    age:1
    
}