
let emp1 ={

    empno:11,
    empname:"Acc",
    age:44,
    Salary:43567.33,
    Displaydetails : function(){
        console.log("Hellow....");
    },

    Name: ["Accenture","Infosys","Dell","Wipro","Cognizant","SAP"],
    reportee: {empno:122,empname:'wipro',age:34}

}

console.log("Employee Name = ",emp1.empname);
emp1.Displaydetails();
console.log("Second Hobby of Emp2 = ",emp1.Name[1]);
console.log("Emp2's reportee's name = ",emp1.reportee.empname);