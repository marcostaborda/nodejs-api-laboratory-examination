import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { TypeExamination } from 'App/Utils'

export default class Examination extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public typeExam: TypeExamination

  @column()
  public isActive: boolean
}
