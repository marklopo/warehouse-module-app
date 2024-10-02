--liquibase formatted sql

--changeset author.admin:05 labels:create-inspection-table
DROP TABLE IF EXISTS inspection;
CREATE TABLE  IF NOT EXISTS inspection(
id BIGINT PRIMARY KEY auto_increment UNIQUE,
date VARCHAR(400) NULL,
ename VARCHAR(400) NULL,
model VARCHAR(400) NULL,
snumber VARCHAR(400) NULL,
registration VARCHAR(400) NULL,
name VARCHAR(400) NULL,
fname VARCHAR(400) NULL,
division VARCHAR(400) NULL,
position VARCHAR(400) NULL,
body VARCHAR(400) NULL,
wheel VARCHAR(400) NULL,
brake VARCHAR(400) NULL,
light VARCHAR(400) NULL,
horn VARCHAR(400) NULL,
belt VARCHAR(400) NULL,
leak VARCHAR(400) NULL,
battery VARCHAR(400) NULL,
status VARCHAR(400) NULL,
comments VARCHAR(400) NULL
);

--changeset author.admin:06 labels:insert-into-inspection
insert into inspection( date,ename,model,snumber,registration, name,fname,division,position,body,wheel,brake,light,horn,belt,leak,battery,status, comments) values ('02-09-2024','PPT','120','EW111','1', 'Adam','Nowak','Warehouse','Operator','ok','ok','ok','ok','ok','ok','ok','ok','ok','');
insert into inspection( date,ename,model,snumber,registration, name,fname,division,position,body,wheel,brake,light,horn,belt,leak,battery,status, comments) values ('02-09-2024','PPT','120','EW121','2', 'Robert','Szota','Warehouse','Operator','ok','ok','ok','ok','ok','ok','ok','ok','ok','');
insert into inspection( date,ename,model,snumber,registration, name,fname,division,position,body,brake,wheel,light,horn,belt,leak,battery,status, comments) values ('02-09-2024','PPT','120','EW122','3', 'Ewa','Ogrodnik','Warehouse','Operator','ok','ok','ok','ok','ok','ok','ok','ok','ok','');

	
	