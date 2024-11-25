create database teoriamusical;
use teoriamusical;

create table usuario (
idCadastro int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
ddd char(2),
celular char(9),
email varchar(45),
senha varchar(45),
confirmar_senha varchar(45),
instrumento char(8)
);

select * from usuario;

create table quiz (
pergunta int,
resposta char(1),
fkUsuario int,
foreign key(fkUsuario) references usuario(idCadastro)
);

select 
SUM(CASE WHEN resposta = 1 THEN 1 ELSE 0 END) AS qtd_certa,
  SUM(CASE WHEN resposta = 0 THEN 1 ELSE 0 END) AS qtd_errada
 from quiz where fkUsuario = 18 
 ; 




