
import express,{Application} from 'express';
const app:Application = express();
import userRoutes from './routes/user.routes';
let port:number = 3003;
import {  } from "module";
import { create } from 'domain';
app.use(express.json());

app.use('/users',userRoutes);




app.listen(port,()=>console.log(`express started on port ${port}`));