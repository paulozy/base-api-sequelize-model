import { Router } from 'express'
import { 
  addTodo, 
  destroyTodo, 
  getTodo, 
  getTodos, 
  updateTodo } from '../controllers/TodoController'

const routes = Router()

routes.get('/code', (req, res) => {
  res.json({ message: 'Already to code!'})
})

routes.get('/todos', getTodos)
routes.get('/todos/:todoID', getTodo)
routes.post('/todos', addTodo)
routes.put('/todos/:todoID', updateTodo)
routes.delete('/todos/:todoID', destroyTodo)

export { routes }