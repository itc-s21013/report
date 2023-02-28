import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Students extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public code: string

  @column()
  public name: string

}
