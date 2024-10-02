--liquibase formatted sql

--changeset author.admin:00 labels:create-employees-table
DROP TABLE IF EXISTS employees;
CREATE TABLE  IF NOT EXISTS employees(
id BIGINT PRIMARY KEY auto_increment UNIQUE,
name VARCHAR(400) NULL,
fname VARCHAR(400) NULL,
division VARCHAR(400) NULL,
position VARCHAR(400) NULL,
username VARCHAR(400) NULL,
password VARCHAR(400) NULL,
enabled VARCHAR(400) NULL,
authority VARCHAR(400) NULL
);

--changeset author.admin:01 labels:insert-into-employees
insert into employees( name,fname,division,position,username,password,enabled,authority ) values ('Adam','Nowak','Warehouse','Operator','admin','admin','true','ROLE_ADMIN');
insert into employees( name,fname,division,position,username,password,enabled,authority ) values ('Jan','Kowalski','Warehouse','Lider','user1','user1','true','ROLE_USER' );
insert into employees( name,fname,division,position,username,password,enabled,authority) values ('Tomasz','Zebra','Warehouse','Coordinator','user2','user2','true' ,'ROLE_USER');
insert into employees( name,fname,division,position,username,password,enabled,authority ) values ('Anna','Jarosz','HR','Senior HR','user3','user3','true','ROLE_USER');
insert into employees( name,fname,division,position,username,password,enabled,authority ) values ('Ewa','Ogrodnik','Account' ,'Senior Account','user4','user4','true','ROLE_USER');
