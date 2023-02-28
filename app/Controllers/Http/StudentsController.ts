// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Student from "App/Models/students";

export default class StudentsController {
  public async index(ctx: HttpContextContract) {
    const students = await Student.all()
    const data = {
      title: 'Sample',
      message: 'Lucid',
      data:students
    }
    return ctx.view.render('student/index', data)
  }
  public async add(ctx: HttpContextContract) {
    const data = {
      title: 'Add',
      message: 'Personの新規作成:'
    }
    return ctx.view.render('student/add', data)
  }
  public async add_posted(ctx: HttpContextContract) {
    await Student.create(ctx.request.body())
    return ctx.response.redirect('/student')
  }
}
