import passport from "passport";
import app from "../../config/app.js";

app.get("/", function (req, res) {
  var errorMessage = req.flash("error");
  var successMessage = req.flash("success");

  res.render("login/login.ejs", {
    message:
      successMessage.length > 0
        ? successMessage[0]
        : errorMessage.length > 0
        ? errorMessage[0]
        : null,
  });
});

app.post(
  "/loginPost",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/",
    failureFlash: true, // habilita mensagens flash
    failureFlash:
      "Login inválido. Verifique suas credenciais e tente novamente.", // mensagem flash a ser exibida
  })
);

app.get("/logout", (req, res) => {
  req.flash("successMessage", "Logout realizado com sucesso!");
  req.session.destroy((err) => {
    if (err) return console.log(err);

    res.redirect("/");
  });
});
