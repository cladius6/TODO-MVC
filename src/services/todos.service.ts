import sql from "../databases/sql.ts";
import {
  IAddTodo,
  IUpdateTodo,
  IDeleteTodo,
} from "../models/todos.interfaces.ts";

export class TodosService {
  tableName: string;

  constructor(tableName: string) {
    this.tableName = tableName;
  }

  async getAllTodos() {
    const todos = await sql`
    SELECT * FROM  ${sql(this.tableName)} ORDER BY id ASC;
    `;
    return todos;
  }

  async addTodo(todo: IAddTodo): Promise<void> {
    await sql`
      INSERT INTO ${sql(this.tableName)} (name, description) values (${
      todo.name
    }, ${todo.description})
    `;
    return;
  }

  async updateTodo(todo: IUpdateTodo): Promise<void> {
    await sql`
      UPDATE ${sql(this.tableName)} SET name = ${todo.name}, description = ${
      todo.description
    } WHERE id = ${todo.id}
    `;
    return;
  }

  async deleteTodo(todo: IDeleteTodo): Promise<void> {
    await sql`
      DELETE FROM ${sql(this.tableName)} WHERE id = ${todo.id}
    `;
    return;
  }
}
