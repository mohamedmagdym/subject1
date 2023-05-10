import express from 'express'
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
import subjectsRouter from './routes/subject.js'
const mongoConnectionUrl = 'mongodb://127.0.0.1:27017'
mongoose.connect(mongoConnectionUrl);
import adminRouter from './routes/admin.js'
const app = express();
app.use(express.urlencoded({ extended: true }));
import departmentRouter from './routes/department.js'
import doctorRouter from './routes/doctor.js'


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templets');



app.get('/', (req, res) => {
    res.render('other/first');
})

app.use(express.static('public'));


app.use('/subjects', subjectsRouter);
app.use('/adminstrator', adminRouter);
app.use('/department', departmentRouter)
app.use('/doctor' , doctorRouter)


app.listen(process.env.port, () => {
    console.log(`started the app on http://localhost:${process.env.port}`);
})