let mongodb = require('mongodb');    // Step1 , Load the Driver
 
let mongoclient = mongodb.MongoClient;   // Step 2 , Mongo Client is Created.
 
let url = "mongodb://127.0.0.1:27017";     // Step 3 , URI created
 
let dbName= "NGEBATCH2";
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
        let db = conn.db(dbName);    // Mention the name of the Database
           // Inside NGEBATCH2 database there is a collection "employees". Perform insertOne operation on the collection
            db.collection("employees").find({empno:5555}).toArray((err , emps)=>{
                if(err)
                {
                    console.log("Some error");
                }
                else
                {
                    if(emps.length == 0)
                    {
                        console.log("Employee Doesnot Exist")
                    }
                    else
                    {
                        console.log("Employee Found = ",emps[0]);
                    }
                   
                }
                conn.close();
            })
    }
});                  // Step 4 , Connecting to MongoDB Database through the mongoclient.