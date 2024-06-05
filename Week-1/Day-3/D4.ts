let countrynames = ['India','Pakistan','Bangladesh','Nepal','Afghanistan'];
 
/* let country1 = countrynames[0];
let country2 = countrynames[1];
let country3 = countrynames[2];
let country4 = countrynames[3];
let country5 = countrynames[4]; */
 
let [country1 , country2 , country3 , country4 , country5  ] = countrynames;
 
console.log("Country 1 = ",country1);
console.log("Country 2 = ",country2);
console.log("Country 3 = ",country3);
console.log("Country 4 = ",country4);
console.log("Country 5 = ",country5);


let employee = {
    empno : 1111,
    empname : "Accenture",
    age:44,
    salary : 34567.77,
    DisplayEmployee : function ()
    {
        console.log("Hellooooo");
    },
    hobbies : ["Singing","Jogging","Swimming"],
    reportee : {empno : 2222, empname : "Bangalore" , State: "Telangana"}
}
 
/* let empno = employee.empno;
let empname = employee.empname;
let age = employee.age;
let salary = employee.salary;
let DisplayEmployee = employee.DisplayEmployee;
let hobbies = employee.hobbies;
let reportee = employee.reportee; */
 
let {empno,empname,age,salary,DisplayEmployee,hobbies,reportee} = employee;  // Object Destructuring.
 
console.log("Employee Name = ",empname);
DisplayEmployee();
console.log("Second Hobby of Emp2 = ",hobbies[1]);
console.log("Emp2's reportee's name = ",reportee.empname);