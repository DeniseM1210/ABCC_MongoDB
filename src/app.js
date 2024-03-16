import express from "express";
import exphbs from 'express-handlebars';
import indexRoutes from './routes/server.routes'
import path from 'path';
import morgan from "morgan";
import {create} from "express-handlebars";
const app = express();

app.set("port", process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(".hbs", create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: 'main',
    extname: ".hbs",
}).engine
);
app.set("view engine", ".hbs");

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(indexRoutes);
export default app;