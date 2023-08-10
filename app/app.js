import express from "express" ;
import dotenv from "dotenv" ;
import morgan from "morgan";
import cors from "cors" ;
import enviroments from "./config/enviroment";
import AllRoutes from "./routes/users.routes";


const app = express();

// setings 
app.set("PORT", process.env.PORT);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    res.send({message: 'Bienvenido a mi aplicacion'});
});

app.use('/api', AllRoutes);



export default app;