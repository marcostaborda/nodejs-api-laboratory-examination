import { string } from '@ioc:Adonis/Core/Helpers'
import { BaseModel } from '@ioc:Adonis/Lucid/Orm'
import { LucidModel } from '@ioc:Adonis/Lucid/Model'

BaseModel.namingStrategy.serializedName = (_: LucidModel, attributeName: string): string => {
  return string.camelCase(attributeName)
}
