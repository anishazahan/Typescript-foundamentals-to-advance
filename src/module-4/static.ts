

class Counter{
    // counter:number;
    //  static

    static count: number = 10;

     // static er zonno constructor dewa lagba na

    // constructor(count:number){
    //    Counter.count = count
    // }

    static increement():number{
        return Counter.count = Counter.count +1;
    }
    static decreement():number{
        return Counter.count= Counter.count -1;
    }
}

// const incre = new Counter();
// const decre = new Counter();

console.log(Counter.increement());
console.log(Counter.decreement());