import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

app.get("/api/status/", (c) => {
  return c.json({ status: "ok" });
});

export default app;
