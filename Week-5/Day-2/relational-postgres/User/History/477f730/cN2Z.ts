import { Pool } from 'pg'
import { Request, Response } from 'express'
 
 
console.log(`Create pool with defaults: server='MyExpress Server'`)
const pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  user: 'postgres',
  password: 'mysecretpassword',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 60000,
  connectionTimeoutMillis: 10000,
})
 
 
export const getEmployees = async (Request: Request, response: Response) => {
    console.log('getEmployees')
    try {
          const employees = await pool.query(
              "select * from employee;"
          );
          console.log("Employees = ",employees.rows);
          response.json(employees.rows);
      //response.status(404).json({ message: 'TODO: getEmployees' })
    } catch (error) {
      console.log('Error thrown in getEmployees: ', (error as Error).message)
      response.status(500).json({ message: 'There was an error' })
    }
  }

  export const deleteEmployee = async (Request: Request, response: Response) => {
    console.log('Delete Employee')
  let empno=1235;
    try {
          const empl = await pool.query(
              `delete from employee where empno= ${empno} returning empno;`
          );
          console.log("Employee Deleted = ",empl);
          response.json(`${empl} Employee Deleted`);
      //response.status(404).json({ message: 'TODO: getEmployees' })
    } catch (error) {
      console.log('Error thrown in deleteEmployees: ', (error as Error).message)
      response.status(500).json({ message: 'There was an error' })
    }
  }

  export const insertEmployee = async (Request: Request, response: Response) => {
    console.log('Insert Employee')
    let empno=1235;
    let empname="Srilatha";
    let age=25;
    let salary='33455.78'
    try {
          const empl = await pool.query(
              `insert into employee values(1235,'Srilatha',33,25356.88) returning empno;`
          );
          console.log("Employee Inserted = ",empl);
          response.json(`${empl} Employee Insetred`);
      //response.status(404).json({ message: 'TODO: getEmployees' })
    } catch (error) {
      console.log('Error thrown in InsertEmployees: ', (error as Error).message)
      response.status(500).json({ message: 'There was an error' })
    }
  }

  export const updateEmployee = async (Request: Request, response: Response) => {
    console.log('Insert Employee')
    let empno=1235;
    let empname="Srilatha";
    let age=25;
    let salary='33455.78'
    try {
          const empl = await pool.query(
              `alter table employee salary=${salary} returning empno;`
          );
          console.log("Employee updated = ",empl);
          response.json(`${empl} Employee updated`);
      //response.status(404).json({ message: 'TODO: getEmployees' })
    } catch (error) {
      console.log('Error thrown in InsertEmployees: ', (error as Error).message)
      response.status(500).json({ message: 'There was an error' })
    }
  }
