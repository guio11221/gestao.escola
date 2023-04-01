import express from "express";
import path from "path";
import morgan from "morgan";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import { fileURLToPath } from "url";
import flash from "connect-flash";
import useagent from "express-useragent";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use(
  session({
    name: "Session",
    secret:
      "23yd7423y7d4y2342738td4283423323yr8273br8t2bd9rt236rt6623r6td236trd623tr623tbd23b9r2393brd39drt9",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 1000, // 1h
    },
  })
);

app.use(express.json());
app.use(useagent.express()); // dados do dispositivo operacional
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../../app/views"));

app.use(express.static(path.join(__dirname, "../../app/public")));

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

export default app;