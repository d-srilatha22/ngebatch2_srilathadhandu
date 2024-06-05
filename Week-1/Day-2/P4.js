function Employee (){
    this.empnum;
    this.empname;
    this.age;
    this.salary;

    this.Displaydetails= function (){
        console.log("------EMP Details--------");
        console.log("Empnum=",this.empnum);
        console.log("Empname",this.empname);
        console.log("Age=",this.age);
        console.log("Salary=",this.salary);
    };

};

let emp=new Employee();
emp.empnum=101;
emp.empname="Srii";
emp.age=9;
emp.salary=98765.89;
emp.Displaydetails();