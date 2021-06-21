import express, { response } from 'express';

const app = express();

app.get("/test", (request, response) => {
  response.send("Olá NLW Get!");
});

app.post("/test-post", (request, response) => {
  return response.send("Olá NLW Post!");
})

app.listen(3000, () => {
  console.log('Server is running!');
})

//CÓDIGO DESAFIO:     #TOGETHER