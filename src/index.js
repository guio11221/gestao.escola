import app from "./config/app.js";
import { config } from "dotenv"; config()


/** ROTAS */

import './auth/index.js'
import './pages/login/login.js'
import './pages/home/home.js'


app.get('*', (req,res) => {
    res.render('page-not-fond/404.ejs')
})

app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta ${process.env.PORT}`))