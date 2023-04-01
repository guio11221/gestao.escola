create database gestao_escolar
use gestao_escolar

CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  email VARCHAR(100),
  senha VARCHAR(255),
  data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE alunos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  data_nascimento DATE,
  endereco VARCHAR(200),
  telefone VARCHAR(20),
  email VARCHAR(100),
  curso_id INT,
  turma_id INT,
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE cursos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  carga_horaria INT,
  descricao VARCHAR(200),
  pre_requisitos VARCHAR(200),
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE matriculas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  aluno_id INT,
  curso_id INT,
  turma_id INT,
  data_matricula DATE,
  status VARCHAR(20),
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id),
  FOREIGN KEY (aluno_id) REFERENCES alunos(id),
  FOREIGN KEY (curso_id) REFERENCES cursos(id),
  FOREIGN KEY (turma_id) REFERENCES turmas(id)
);

CREATE TABLE notas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  aluno_id INT,
  disciplina_id INT,
  turma_id INT,
  nota FLOAT,
  data_avaliacao DATE,
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id),
  FOREIGN KEY (aluno_id) REFERENCES alunos(id),
  FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id),
  FOREIGN KEY (turma_id) REFERENCES turmas(id)
);

CREATE TABLE disciplinas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  carga_horaria INT,
  descricao VARCHAR(200),
  pre_requisitos VARCHAR(200),
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

CREATE TABLE professores (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  data_nascimento DATE,
  endereco VARCHAR(200),
  telefone VARCHAR(20),
  email VARCHAR(100),
  formacao_academica VARCHAR(200),
  disciplina_id INT,
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id),
  FOREIGN KEY (disciplina_id) REFERENCES disciplinas(id)
);

CREATE TABLE turmas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  curso_id INT,
  periodo VARCHAR(20),
  professor_id INT,
  sala VARCHAR(20),
  id_usuario INT,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id),
  FOREIGN KEY (curso_id) REFERENCES cursos(id),
  FOREIGN KEY (professor_id) REFERENCES professores(id)
);



INSERT INTO usuarios (nome, email, senha) VALUES 
('João Silva', 'joao@gmail.com', '$2b$10$y4J4lmI05krjK1DViwqpx.MZAVxj5I5YzKjGtL5R5R5oJ6NfV6SYW'),
('Maria Santos', 'maria@gmail.com', '$2b$10$y4J4lmI05krjK1DViwqpx.MZAVxj5I5YzKjGtL5R5R5oJ6NfV6SYW');

INSERT INTO alunos (nome, data_nascimento, endereco, telefone, email, curso_id, turma_id) VALUES
('Pedro Souza', '2005-01-01', 'Rua das Flores, 123', '1199999999', 'pedro@gmail.com', 1, 1),
('Ana Oliveira', '2006-02-15', 'Avenida dos Pássaros, 321', '1198888888', 'ana@gmail.com', 1, 1);

INSERT INTO cursos (nome, carga_horaria, descricao, pre_requisitos) VALUES
('Informática Básica', 120, 'Curso de informática para iniciantes', ''),
('Inglês Intermediário', 180, 'Curso de inglês para quem já tem conhecimentos básicos', 'Inglês Básico');

INSERT INTO matriculas (aluno_id, curso_id, turma_id, data_matricula, status) VALUES
(1, 1, 1, '2022-01-01', 'Ativo'),
(2, 1, 1, '2022-01-02', 'Ativo');

INSERT INTO notas (aluno_id, disciplina_id, turma_id, nota, data_avaliacao) VALUES
(1, 1, 1, 8.5, '2022-01-10'),
(2, 1, 1, 7.5, '2022-01-10');

INSERT INTO disciplinas (nome, carga_horaria, descricao, pre_requisitos) VALUES
('Matemática', 80, 'Curso de matemática básica', ''),
('Português', 80, 'Curso de português para iniciantes', '');

INSERT INTO professores (nome, data_nascimento, endereco, telefone, email, formacao_academica, disciplina_id) VALUES
('Marcos Santos', '1980-03-12', 'Rua dos Coqueiros, 321', '1197777777', 'marcos@gmail.com', 'Doutorado em Informática', 1),
('Renata Oliveira', '1985-05-25', 'Avenida das Flores, 123', '1196666666', 'renata@gmail.com', 'Mestrado em Letras', 2);

INSERT INTO turmas (nome, curso_id, periodo, professor_id, sala) VALUES
('Turma de Informática Básica 2022.1', 1, '2022.1', 1, 'Sala 1'),
('Turma de Inglês Intermediário 2022.1', 2, '2022.1', 2, 'Sala 2');
