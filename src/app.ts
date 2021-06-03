import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes'

//initalizations
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.get("/", (req, res) => {
    res.send(`La API esta en http://localhost:${app.get('port')}`)
});

app.use(authRoutes);

export default app;
