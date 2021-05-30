import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ExaminationLaboratories extends BaseSchema {
  protected tableName = 'examination_laboratories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('examination_id')
        .unsigned()
        .references('id')
        .inTable('examinations')
        .onDelete('CASCADE')

      table
        .integer('laboratory_id')
        .unsigned()
        .references('id')
        .inTable('laboratories')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
