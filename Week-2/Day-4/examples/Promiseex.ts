// Pizza

const successmessage = (data:any) => console.log(`Yahooo..... ${data}`);
const failmessage = (data:any) => console.log(`Soryyy..... ${data}`);

const promiseMaker = () => 
    new Promise((resolve, reject) => {
        const status = false;
        if(status)
            resolve("your order is readyyyy");
        else
            reject("your order is failed");
    });
console.log("Accepted");
promiseMaker().then(successmessage).catch(failmessage);
console.log("Done")
