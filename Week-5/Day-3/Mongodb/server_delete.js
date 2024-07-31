let mongodb = require('mongodb');    // Step1 , Load the Driver
 
let mongoclient = mongodb.MongoClient;   // Step 2 , Mongo Client is Created.
 
let url = "mongodb://127.0.0.1:27017";     // Step 3 , URI created

let dbName="NGEBATCH2";

mongoclient.connect(url,(err,conn)=>{
    if(err){
        console.log("Some Error , Connection to the Database Failed.....");
        console.log("ERROR = ",err);
    }
    else{
    console.log("Connection to the Database Successful");
    //======= Perform any CRUD Operations=====
 	let db=conn.db(dbName);
 	db.collection("employees").deleteOne({empname:"New"},(e,s)=>{
        if(e){
        console.log("There is an issue, delete failed");
        console.log("ERROR = ",e);
        }
        else{
            console.log("Data delete successfully......");
        console.log("Data=",s);
        }

    })
}

})