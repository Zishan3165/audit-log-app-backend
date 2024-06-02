import request from "supertest";
import app from "../src/app";

describe("Check if app server runs without error", () =>
  test("First test", async () => {
    let response = await request(app).get("/sites");
    expect(response.statusCode).toBe(200);
  }));
