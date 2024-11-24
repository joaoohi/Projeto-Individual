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

create table quiz (
pergunta int,
resposta char(1),
fkUsuario int,
foreign key(fkUsuario) references usuario(idCadastro)
);


