import db from "../../database/db.js";
import app from "../../config/app.js";
import { verific } from "../../auth/index.js";

app.get("/home", verific, (req, res) => {
  var errorMessage = req.flash("error");
  var successMessage = req.flash("success");
  console.log(req.user);
  res.render("perfil-User/perfil.ejs", {
    dados: req.user,
    message:
      successMessage.length > 0
        ? successMessage[0]
        : errorMessage.length > 0
        ? errorMessage[0]
        : null,
  });
});
