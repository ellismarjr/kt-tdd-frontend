import { Request, Response, Router } from "express";

const routes = Router();

routes.post('/auth', (request: Request, response: Response) => {
  return response.status(201).json({
    user: 'john.doe@gmail.com',
    token: "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4NjE2NjIxMiwiaWF0IjoxNjg2MTY2MjEyfQ.R6m8dS7qMNLbci07-Il68w6SDX7ZBP4MN1j6iWWuFvg"
  });
});

export {
  routes
}