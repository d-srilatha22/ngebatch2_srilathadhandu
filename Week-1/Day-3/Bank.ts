type Bank={
    Name:string,
    curBal:number,
    PerAmnt:number,
}

 let b:Bank ={
    Name:'Sri',
    curBal:50000,
    PerAmnt:100000
} 

let addamnt = (newAmnt:number, b:Bank): number => {
    b.curBal=b.curBal+newAmnt;
    return b.curBal;
}

let remamnt = (remAmnt:number, b:Bank): number => {
    b.curBal=b.curBal-remAmnt;
    return b.curBal;
}

let X=addamnt(5000,b);
console.log("Added new amnt=",X);

let Y=remamnt(2000,b);
console.log("Added new amnt=",Y);
