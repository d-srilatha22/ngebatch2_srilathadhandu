let aa: number[]= [10,20,30,40,50]

let [c1,c2,c3,c4,c5] = aa;


let a = (...b:number[]) => {
    console.log(b)
}

a(10,20,30)
a(10)
a()
a(1,2,3,4,5,6,7,8,9)

let a1=[10,20,30]
console.log(10,20,...a1);



