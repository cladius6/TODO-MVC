import { Todo } from "../models/todo.interface.ts";
import { Todos } from "../models/todos.ts";

export class TodosService {
  private todos = Todos.getinstance();

  getAllTodos(): Todo[] {
    return this.todos.getTodos();
  }

  addTodo(todo: Todo): void {
    this.todos.addTodo(todo);
  }

  getTodoById(id: number): Todo | undefined {
    return this.todos.getTodosById(id);
  }

  deleteTodo(id: number): void {
    this.todos.deleteTodo(id);
  }
}
