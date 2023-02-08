import { Todo } from "./todo.interface.ts";

export class Todos {
  private static instance: Todos;
  private todos: Todo[];

  private constructor() {
    this.todos = [];
  }

  static getinstance(): Todos {
    if (!Todos.instance) {
      Todos.instance = new Todos();
    }
    return Todos.instance;
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  getTodos() {
    return [...this.todos];
  }

  getTodosById(id: number): Todo | undefined {
    throw new Error("Method not implemented.");
  }

  deleteTodo(id: number): void {
    throw new Error("Method not implemented.");
  }
}
