import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext';
import {rules, schema} from '@ioc:Adonis/Core/Validator';
import Students from "App/Models/students";

export default class AuthController {
  public async registerShow({view}: HttpContextContract) {
    return view.render('auth/register')
  }

  public async loginShow({view}: HttpContextContract) {
    return view.render('auth/login')
  }

  public async register({request, response}: HttpContextContract) {
    console.log('register')
    const StudentSchema = schema.create({
      code: schema.string({trim: true}),
      name: schema.string({trim: true}, [
        rules.unique({table: 'students', column:'code'})
      ]),
    })
    const data = await request.validate({
      schema: StudentSchema,
    })
    console.log(data)
    const user = await Students.create(data)
    return response.redirect().toPath('/')
  }
  public async login({request, response, session}: HttpContextContract) {
    const {code} = request.only(['code'])
    console.log(code)
    session.put('code', code)

    return response.redirect().toPath('/')
  }
  public async logout({response, session}: HttpContextContract) {
    session.forget('code')
    return response.redirect().toRoute('/')
  }
}
