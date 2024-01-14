import express, {Express} from 'express';
import {order} from "./routes/order";

const app: Express = express()
const port = 3000

// app.get('/api', (req, res) => {
//   res.send('Hello Worldaaaaaabbbbb!')
// })

app.use('/order', order);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})