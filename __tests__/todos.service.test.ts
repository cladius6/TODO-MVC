import { TodosService } from "../src/services/todos.service.ts";
import {
  assertEquals,
  assertNotEquals,
} from "https://deno.land/std@0.158.0/testing/asserts.ts";
import {
  beforeEach,
  afterEach,
  it,
} from "https://deno.land/std@0.158.0/testing/bdd.ts";
import sql from "../src/databases/sql.ts";

const testTableName = "test_todos";
const todosService = new TodosService(testTableName);

async function setupDb() {
  await sql`
    DROP TABLE IF EXISTS ${sql(testTableName)};
  `;

  await sql`
    CREATE TABLE ${sql(testTableName)} (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      todo_status todo_status default 'TODO'
    );
  `;

  for (const todo of testData) {
    await todosService.addTodo(todo);
  }
}

async function cleanupDb() {
  await sql`
    DROP TABLE IF EXISTS ${sql(testTableName)};
  `;
}

const testData = [
  { name: "Test Todo 1", description: "Test Description 1" },
  { name: "Test Todo 2", description: "Test Description 2" },
  { name: "Test Todo 3", description: "Test Description 3" },
];

beforeEach(async function () {
  await setupDb();
});

afterEach(async function () {
  await cleanupDb();
});

it("Get all todos", async function () {
  const result = await todosService.getAllTodos();

  assertEquals(result.length, testData.length);
  for (let i = 0; i < result.length; i++) {
    assertEquals(result[i].name, testData[i].name);
    assertEquals(result[i].description, testData[i].description);
  }
});

it("Add todo", async function () {
  const newTodo = { name: "Test Todo 4", description: "Test Description 4" };
  await todosService.addTodo(newTodo);

  const result = await todosService.getAllTodos();

  assertEquals(result.length, testData.length + 1);
  assertEquals(result[result.length - 1].name, newTodo.name);
  assertEquals(result[result.length - 1].description, newTodo.description);
});

it("Delete todo", async function () {
  const todoToDelete = testData[0];
  await todosService.deleteTodo({ id: 1 });

  const result = await todosService.getAllTodos();

  assertEquals(result.length, testData.length - 1);
  for (const todo of result) {
    assertNotEquals(todo.name, todoToDelete.name, "Todo was not deleted");
    assertNotEquals(
      todo.description,
      todoToDelete.description,
      "Todo was not deleted"
    );
  }
});

it("Update todo", async function () {
  const updatedTodo = {
    id: 1,
    name: "Updated Todo 1",
    description: "Updated Description 1",
  };
  await todosService.updateTodo(updatedTodo);

  const result = await todosService.getAllTodos();

  assertEquals(result.length, testData.length);
  assertEquals(result[0].name, updatedTodo.name);
  assertEquals(result[0].description, updatedTodo.description);
});
