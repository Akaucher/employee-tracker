drop database if exists serfs_db;
create database serfs_db;

use serfs_db;

create table department(
    id int not null auto_increment,
    departmentName VARCHAR(30) Null,
    PRIMARY key (id)
);

create TABLE role_(
    id int not null auto_increment,
    title varchar(30) null,
    salary DECIMAL(10,2) NULL,
    department_id int null,
    PRIMARY key (id)
);

CREATE table employee(
    id int not null auto_increment,
    firstName VARCHAR(30) null,
    lastName varchar(30) null,
    role_id int null,
    manager_id int null,
    PRIMARY key (id)
);

insert into department (departmentName)
values ("nobility");

insert into department (departmentName)
values ("serfs");

insert into role_ (title, salary, department_id)
values ("earl", 10, 1);

insert into role_ (title, salary, department_id)
values ("serf", 0.5, 2);

insert into employee (firstName, lastName, role_id, manager_id)
values ("king", "charles", 2, null);

insert into employee (firstName, lastName, role_id, manager_id)
values ("filthy", "serf", 4, 1);

select * from department;
select * from role_;
select * from employee;
