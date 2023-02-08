import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.158.0/testing/asserts.ts";
import {
  beforeAll,
  describe,
  it,
} from "https://deno.land/std@0.158.0/testing/bdd.ts";

const baseUrl = "http://localhost:3001/";

describe("/todos", () => {
  describe("#GET", () => {
    let response: Response;
    let data: unknown;

    beforeAll(async () => {
      response = await fetch(`${baseUrl}todos`);
      data = await response.json();
    });

    it("should return status 200", () => {
      assertEquals(response.status, 200);
    });

    it("should return object of todos", () => {
      assertEquals(data, {
        todos: [],
      });
    });
  });
});
