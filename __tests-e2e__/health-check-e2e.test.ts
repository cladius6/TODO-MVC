import { assertEquals } from "https://deno.land/std@0.158.0/testing/asserts.ts";
import {
  beforeAll,
  describe,
  it,
} from "https://deno.land/std@0.158.0/testing/bdd.ts";

const baseUrl = "http://localhost:3001/";

describe("/health-check", () => {
  describe("#GET", () => {
    let response: Response;

    beforeAll(async () => {
      response = await fetch(`${baseUrl}health-check`);
      await response.body?.cancel();
    });

    it("should return status 200", () => {
      assertEquals(response.status, 200);
    });
  });
});
