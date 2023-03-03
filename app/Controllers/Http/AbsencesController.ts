import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Absences from "App/Models/absences";

export default class AbsencesController {
  public async index(ctx: HttpContextContract) {
    const absences = await Absences.all()
    const data = {
      title: '届け出一覧',
      data: absences
    }
    return ctx.view.render('absences/index', data)
  }

  public async add(ctx: HttpContextContract) {
    const data = {
      title: '届け出の新規作成',
      message: '届け出を入力してください'
    }
    return ctx.view.render('absences/add', data)
  }

  public async add_posted(ctx: HttpContextContract) {
    await Absences.create(ctx.request.body())
    return ctx.response.redirect('/absences')
  }
}
