import express from 'express'
import { deleteEmployee, getEmployees, insertEmployee, updateEmployee } from './database-helper';
 
 
let app = express();
 
//http://localhost:3000/
app.get('/',(req, res)=>{
    res.send(`
<div align="center">
<h1>Hello , Welcome to my Express Server..</h1>
</div>
    `)
});
 
//http://localhost:3000/employees
app.get('/employees',getEmployees);

//http://localhost:3000/deleteemployee
app.get('/deleteemployee',deleteEmployee);

//http://localhost:3000/insertemployee
app.get('/insertemployee',insertEmployee);

//http://localhost:3000/updateemployee
app.get('/updateemployee',updateEmployeeEmployee);
 
app.listen(3000, ()=>{
    console.log("My Express Server is Running on Port No 3000....");
})