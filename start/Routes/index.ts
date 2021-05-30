import Route from '@ioc:Adonis/Core/Route'

Route.resource('examinations', 'Main').apiOnly()
Route.resource('laboratories', 'Main').apiOnly()
