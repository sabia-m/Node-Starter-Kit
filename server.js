const express = require("express");

const app = express();

app.get("/", (request, response) => {
    response.json({
        recipient: "CYF", 
        message: "Hello"
    })
})

app.get("/node", (request, response) => {
  response.json({
    node: "Node.js"
  })
})

app.get("/codeyourfuture", (request, response) => {
  response.json({
      day: "Sunday",
      class: "Group A"
  })
})

app.get("/chocolate", (request, response) => {
  const amount = request.query.amount
  response.send(`Yum! I've eaten ${amount} chocolates!`)
  })

app.listen(3000, () => {
  console.log("Listening to port 3000!");
});
