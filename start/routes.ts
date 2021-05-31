import Route from '@ioc:Adonis/Core/Route'

Route.get('examinations/search/laboratories', 'Laboratories.index')
  .namespace('App/Controllers/Http/Examinations')

Route.resource('examinations', 'Main')
  .namespace('App/Controllers/Http/Examinations')
  .apiOnly()

Route.patch('examinations/:examinationId/laboratories/:laboratoryId', 'ExaminationLaboratories.update')
  .namespace('App/Controllers/Http/Examinations')
  .as('examinations.associate.laboratories')
Route.delete('examinations/:examinationId/laboratories/:laboratoryId', 'ExaminationLaboratories.destroy')
  .namespace('App/Controllers/Http/Examinations')
  .as('examinations.disassociate.laboratories')

Route.resource('laboratories', 'Main')
  .namespace('App/Controllers/Http/Laboratories')
  .apiOnly()
