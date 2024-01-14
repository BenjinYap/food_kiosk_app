import express, {Express} from 'express';
import {OrderRouter} from "./Routes/Order/OrderRouter";

const app: Express = express()
const port = 3000

app.get('/api', (req, res) => {
  res.send('Hello Worldaaaaaabbbbb!')
})

app.use('/Order', OrderRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})