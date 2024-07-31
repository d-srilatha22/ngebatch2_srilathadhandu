let mongodb = require('mongodb');    // Step1 , Load the Driver
 
let mongoclient = mongodb.MongoClient;   // Step 2 , Mongo Client is Created.
 
let url = "mongodb://127.0.0.1:27017";     // Step 3 , URI created
let emp={empno:5555,empname:"New" ,age:22, salary:56789.99};
let dbName="NGEBATCH2"
 
mongoclient.connect(url,(error,conn)=>{
    if(error)
    {
        console.log("Some Error , Connection to the Database Failed.....");
        console.log("ERROR = ",error);
    }
    else
    {
        console.log("Connection to the Database Successful");
        //======= Perform any CRUD Operations=====
 	let db=conn.db(dbName);
 	db.collection("employees").insertOne(emp,(e,s)=>{
	if(e){
		console.log("some error");
	}
	else{
		console.log("Data inserted succssfully...")
	}
	conn.close();   // Step 5   , Close Connection	
	});
        
    }
});                  // Step 4 , Connecting to MongoDB Database through the mongoclient.