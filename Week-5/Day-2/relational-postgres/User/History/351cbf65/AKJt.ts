import { Pool } from 'pg'
import { Request, Response } from 'express'

const dbServer = process.env.POSTGRES_DB
const dbPassword = process.env.POSTGRES_PASSWORD

console.log(`Create pool with defaults: server='${dbServer}'`)
const pool = new Pool({
  host: dbServer,
  database: 'postgres',
  user: 'postgres',
  password: 'mysecretpassword',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 60000,
  connectionTimeoutMillis: 10000,
})

export const getTeachers = async (request :Request, response: Response) => {
  console.log('getTeachers')
  try {
    const teacher = await pool.query(
        "select * from teacher;"
    );
    console.log("Teachers = ",teacher.rows);
    response.json(teacher.rows);
    //response.status(404).json({ message: 'TODO: getTeachers' })
  } catch (error) {
    console.log('Error thrown in getTeacher: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const getTeacherById = async (request: Request, response: Response) => {
  console.log('getTeacherById')
  const teacher_id = parseInt(request.params.id);
  try {
    const teacher= await pool.query(
      `select * from teacher where teacher_id= ${teacher_id}`
    );
    console.log("Teachers = ",teacher.rows);
    response.json(teacher.rows);
    //response.status(404).json({ message: 'TODO: getTeacherById' })
  } catch (error) {
    console.log('Error thrown in getTeacherById: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const createTeacher = async (request: Request, response: Response) => {
  console.log('createTeacher: body=', request.body)
  const { id,name, surname } = request.params.body;

  try {
    // todo
    const res= await pool.query{
      `insert into teacher values(${id}, ${name}, ${surname});`
    }
    response.status(404).json({ message: 'TODO: createTeacher' })
  } catch (error) {
    console.log('Error thrown in createTeacher: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const updateTeacher = async (request: Request, response: Response) => {
  console.log('updateTeacher: body=', request.body)

  try {
    response.status(404).json({ message: 'TODO: updateTeacher' })
  } catch (error) {
    console.log('Error thrown in updateTeacher: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}

export const deleteTeacher = async (request: Request, response: Response) => {
  console.log('deleteTeacher')
  const teacher_id= parseInt(request.params.id);
  try {
    const res= await pool.query(
      `delete from teacher where teacher_id= ${teacher_id}`
    );
    console.log("Teachers = ",res.rows);
    response.json(res.rows);
    //response.status(404).json({ message: 'TODO: deleteTeacher' })
  } catch (error) {
    console.log('Error thrown in deleteTeacher: ', (error as Error).message)
    response.status(500).json({ message: 'There was an error' })
  }
}
