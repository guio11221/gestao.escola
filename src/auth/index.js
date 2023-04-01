import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import db from "../database/db.js";
import bcrypt, { compareSync } from "bcrypt";


passport.use(
  new LocalStrategy(
    {
      usernameField: "login",
      passwordField: "senha",
    },

    async function (login, senha, done) {
      try {
        const user = await db.query("SELECT * FROM usuarios WHERE email = ?", [
          login,
        ]);



        if (user.length === 0) {
          return done(null, false, {
            
            message: "Login ou senha está incorreto..!",
          });
        }

        const isValidPassword = await bcrypt.compare(senha, user[0].senha); // protegido

        if (!isValidPassword) {
          return done(null, false, { message: "Incorrect email or password" });
        }

        return done(null, user[0]);
      } catch (error) {
        return done(error);
      }
    }
  )
);


passport.serializeUser(function (user, done) {

  done(null, user.id);
});


passport.deserializeUser(async (id, done) => {
  try {
    const rows = await db.query(`SELECT 
    alunos.id AS aluno_id,
    alunos.nome AS aluno_nome,
    alunos.data_nascimento AS aluno_data_nascimento,
    alunos.endereco AS aluno_endereco,
    alunos.telefone AS aluno_telefone,
    alunos.email AS aluno_email,
    cursos.id AS curso_id,
    cursos.nome AS curso_nome,
    cursos.carga_horaria AS curso_carga_horaria,
    cursos.descricao AS curso_descricao,
    cursos.pre_requisitos AS curso_pre_requisitos,
    turmas.id AS turma_id,
    turmas.nome AS turma_nome,
    turmas.periodo AS turma_periodo,
    turmas.sala AS turma_sala,
    matriculas.data_matricula AS matricula_data,
    matriculas.status AS matricula_status,
    disciplinas.id AS disciplina_id,
    disciplinas.nome AS disciplina_nome,
    disciplinas.carga_horaria AS disciplina_carga_horaria,
    disciplinas.descricao AS disciplina_descricao,
    disciplinas.pre_requisitos AS disciplina_pre_requisitos,
    notas.nota AS nota,
    notas.data_avaliacao AS nota_data_avaliacao,
    professores.id AS professor_id,
    professores.nome AS professor_nome,
    professores.data_nascimento AS professor_data_nascimento,
    professores.endereco AS professor_endereco,
    professores.telefone AS professor_telefone,
    professores.email AS professor_email,
    professores.formacao_academica AS professor_formacao_academica
  FROM alunos
  INNER JOIN cursos ON cursos.id = alunos.curso_id
  INNER JOIN turmas ON turmas.id = alunos.turma_id
  INNER JOIN matriculas ON matriculas.aluno_id = alunos.id
  INNER JOIN disciplinas ON disciplinas.id = turmas.curso_id
  INNER JOIN notas ON notas.aluno_id = alunos.id AND notas.disciplina_id = disciplinas.id
  INNER JOIN professores ON professores.id = turmas.professor_id
  
  WHERE alunos.id = ? `, [id]);
    if (rows.length == 0) {
      return done(new Error(`User not found with ID ${id}`));
    }

    return done(null, rows[0]);
  } catch (err) {
    return done(err);
  }
});


export function verific(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}


