create database AgenciaViagens;
use AgenciaViagens;
create table Cliente (
  id_cli int auto_increment,
  nome varchar(50) not null,
  rg varchar(10) not null,
  cpf char(11) not null,
  dt_nasc date not null,
  email varchar(30) not null,
  senha varchar(30) binary not null,
  constraint pk_cli primary key (id_cli)
);
create table Destino (
  id_dest int auto_increment,
  cidade varchar(30) not null,
  uf char(2) not null,
  loc_desemb varchar(30) not null,
  constraint pk_dest primary key (id_dest)
);
create table Promocao (
  id_promo int auto_increment,
  destino int,
  desconto decimal(3,2) not null,
  vencimento datetime not null,
  constraint pk_promo primary key (id_promo),
  constraint fk_promo_dest foreign key (destino) references Destino (id_dest)
);
create table Viagem (
  id_viag int auto_increment,
  destino int not null,
  partida datetime not null,
  chegada datetime not null,
  vlr_padrao decimal(7,2) not null,
  constraint pk_viag primary key (id_viag),
  constraint fk_viag_dest foreign key (destino) references Destino (id_dest)
);
create table Adquire (
  id_adq int auto_increment,
  cliente int not null,
  viagem int not null,
  promocao int,
  constraint pk_adq primary key (id_adq),
  constraint fk_adq_cli foreign key (cliente) references Cliente (id_cli),
  constraint fk_adq_viag foreign key (viagem) references Viagem (id_viag),
  constraint fk_adq_promo foreign key (promocao) references Promocao (id_promo)
);