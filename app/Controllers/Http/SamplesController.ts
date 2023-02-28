import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ReportsController {
  public async index(ctx: HttpContextContract) {
    const data = {
      title: '出席管理システム',
      message: 'ログイン'
    }
    return ctx.view.render('reports/index', data)
  }
}
