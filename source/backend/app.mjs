import express from 'express';
import {order} from "./routes/order.mjs";

const app = express()
const port = 3000

// app.get('/api', (req, res) => {
//   res.send('Hello Worldaaaaaabbb!')
// })

app.use('/order', order);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})