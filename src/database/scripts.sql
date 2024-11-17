create database TeoriaMusical;
use TeoriaMusical;

create table cadastro (
idCadastro int primary key auto_increment,
nome varchar(45),
sobrenome varchar(45),
DDD char(2),
celular char(9),
email varchar(45),
senha varchar(45),
confirmar_senha varchar(45),
instrumento char(8)
);

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
fkCadastro int,
foreign key (fkCadastro) references cadastro(idCadastro)
);