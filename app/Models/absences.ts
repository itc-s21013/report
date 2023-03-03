import { DateTime } from "luxon";
import { BaseModel, belongsTo, BelongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Students from "App/Models/students";

export default class Absence extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => Students, {foreignKey: 'student_id'})
  public student: BelongsTo<typeof Students>

  @column()
  public studentId: number

  @column()
  public kind: number

  @column()
  public reason: string

  @column()
  public startDate: DateTime

  @column()
  public endDate: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
}
