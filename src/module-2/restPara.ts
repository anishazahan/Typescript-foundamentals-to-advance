

const restPara = (...friends : string[]):void=>{
    console.log( friends.map(friend=>friend) );
}

console.log(restPara("mina","rina","tina","bina"));