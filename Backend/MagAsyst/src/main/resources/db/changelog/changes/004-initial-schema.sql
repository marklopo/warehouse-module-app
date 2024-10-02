--liquibase formatted sql

--changeset author.admin:07 labels:create-users-table
DROP TABLE IF EXISTS users;
create table if not exists users(

	username varchar(50) not null UNIQUE,
	password varchar(100) not null,
	enabled VARCHAR(400) NULL
);
--changeset author.admin:08 labels:create-authorities-table
DROP TABLE IF EXISTS authorities;
create table if not exists authorities (
	username varchar(50) not null UNIQUE,
	authority varchar(50) not null,
	constraint fk_authorities_users foreign key(username) references users(username)
);



--changeset author.admin:09 labels:insert-into-users-and-authorities

insert into users(username,password,enabled)
values ('admin','$2a$12$9WHZm3g4CFvGRFjOIP79AeYZ7qwT4Nt26yW3FkKhtAJZOTUAjDtxe', 'true');
insert into authorities (username,authority )
values ('admin','ROLE_ADMIN');
insert into users(username,password,enabled)
values ('user1','$2a$12$9WHZm3g4CFvGRFjOIP79AeYZ7qwT4Nt26yW3FkKhtAJZOTUAjDtxe', 'true');
insert into authorities (username,authority )
values ('user1','ROLE_USER');
insert into users(username,password,enabled)
values ('user2','$2a$12$9WHZm3g4CFvGRFjOIP79AeYZ7qwT4Nt26yW3FkKhtAJZOTUAjDtxe', 'true');
insert into authorities (username,authority )
values ('user2','ROLE_USER');
--changeset author.admin:10 labels:create-index-table
CREATE INDEX IX_Users ON users(enabled);
CREATE INDEX IX_Authority ON authorities(authority);
CREATE INDEX IX_Eq ON equipment(registration);
CREATE INDEX IX_Em ON employees(username);