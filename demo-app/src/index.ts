import express from 'express';
import {monitor} from './monitor';

const app = express();
const port = 3023;

app.get('/', (req: any, res: any) => {
  res.send('<h1>Amazing Hello World!</h1>');
})

monitor('YOUR_SERVICE_NAME', 'YOUR_API_KEY');
app.listen(port, () => console.log(`listening on port http://localhost:${port}`));