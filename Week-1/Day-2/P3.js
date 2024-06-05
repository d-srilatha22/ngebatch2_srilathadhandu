console.log("This is the 1st line....");

/*console.log("X=",x);*/

let x=30;
console.log("X===",x);

x=600
console.log("X=",x);


var msg= function (){

    console.log("in the function X=",x);
    function inner(){
        console.log("inside the function");
    }
    inner();

}

msg();


