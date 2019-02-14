'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');

// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// });
Route.get('/','ProjectController.show');
Route.group( () => {
  Route.post('auth/register', 'UserController.register');
  Route.post('auth/login', 'UserController.login');
  Route.get('project','ProjectController.index').middleware('auth');
  Route.post('project','ProjectController.create').middleware('auth');
  Route.delete('project/:id','ProjectController.destroy').middleware('auth');
  Route.patch('project/:id','ProjectController.update').middleware('auth');
  
  Route.get('project/:id/task','TaskController.index').middleware('auth');
  Route.post('project/:id/task','TaskController.create').middleware('auth');
  Route.delete('task/:id','TaskController.destroy').middleware('auth');
  Route.patch('task/:id','TaskController.update').middleware('auth');
  
  
})
.prefix('api');
