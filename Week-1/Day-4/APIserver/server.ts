//1. create a express server
import express from "express";

//2. create an express instance
const app = express();

//3. create an endpoint using get/post/put/delete
app.get('/hello', (req,res)=> {

    // simply return a response
    res.write("hello response from the express server");
    res.write("End message");
    // end the message
    res.end();
});

app.get('/prod', (req,res)=> {

    var product= {
        pid:'P001',
        Pname:'Laptop',
        cost:98000.00
    }

    res.send(product);
});

app.get('/users', (req,res)=> {

    // simply return a response
    res.write("users response from the express server");
    // end the message
    res.end();
});



app.get('/courses', (req,res) =>{
    var courses= ['Angular','React','Java','C','C++'];
    //res.write(courses);
    //res.end();

    res.send(courses);
    // send() = write()+end()

});

app.get('/users/:id', (req,res) =>{
    res.send("Good Evening user:"+ req.params.id);

});

app.get('/users/byid', (req,res) =>{
    const query = req.query.id;
    res.send("You have enrolled for the course:" + query);

});

app.use(express.json());
app.post('/loginUser', (req,res) =>{

    console.log("This is the POST Method ", req.body);
    const obj = req.body.user;
    res.json({result:obj});
});

app.use(express.json());
app.post('/createproduct', (req,res) =>{
    console.log("This is the create product", req.body);
    const prod= req.body.product;
    res.json({Product1:prod});
})

//4.listen to a port

/* app.listen(3040,'127.0.0.1', () => {

    console.log('Server is running at port 3040');

}); */

const PORT =3400;
app.listen(PORT, () => {

    console.log(`Server is running at port ${PORT}`);

});