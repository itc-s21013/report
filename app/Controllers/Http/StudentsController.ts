// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Student from "App/Models/students";

export default class StudentsController {
  public async index(ctx: HttpContextContract) {
    const students = await Student.all()
    const data = {
      title: 'Sample',
      message: 'Lucid',
      data: students
    }
    return ctx.view.render('student/index', data)
  }
}
