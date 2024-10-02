--liquibase formatted sql

--changeset author.admin:03 labels:create-equipment-table
DROP TABLE IF EXISTS equipment;
CREATE TABLE  IF NOT EXISTS equipment(
id BIGINT PRIMARY KEY auto_increment UNIQUE,
ename VARCHAR(400) NULL,
model VARCHAR(400) NULL,
snumber VARCHAR(400) NULL,
registration VARCHAR(400) NULL
);

--changeset author.admin:04 labels:insert-into-equipment
insert into equipment( ename,model,snumber,registration) values ('PPT','120','EW111','11');
insert into equipment( ename,model,snumber,registration) values ('PPT','120','EW122','21');
insert into equipment( ename,model,snumber,registration) values ('PPT','120','EW112','13');
insert into equipment( ename,model,snumber,registration) values ('RT','310','ZW10','14');
insert into equipment( ename,model,snumber,registration) values ('RT','320','ZW09','51');
