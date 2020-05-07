Start TRANSACTION;
DROP DATABASE IF EXISTS Rezo;
CREATE DATABASE Rezo DEFAULT CHARSET = utf8 COLLATE utf8_bin;
Use Rezo;
SET
  default_storage_engine = INNODB;
CREATE TABLE Countries (
    id int NOT NULL auto_increment PRIMARY KEY,
    country_code varchar(2) NOT NULL,
    country_name varchar(100) NOT NULL
  );
CREATE TABLE StatusCode (
    id int NOT NULL auto_increment PRIMARY KEY,
    Label varchar(255) NOT NULL,
    createdAt datetime not null default NOW(),
    updatedAt datetime not null default NOW(),
    deletedAt datetime
  );
CREATE TABLE InterventionType (
    id int NOT NULL auto_increment PRIMARY KEY,
    Label varchar(255) NOT NULL,
    createdAt datetime not null default NOW(),
    updatedAt datetime not null default NOW(),
    deletedAt datetime
  );
CREATE TABLE Users (
    id int NOT NULL auto_increment PRIMARY KEY,
    Login varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    IsAdmin boolean not null default 0,
    createdAt datetime not null default NOW(),
    updatedAt datetime not null default NOW(),
    deletedAt datetime
  );
CREATE TABLE Customers (
    id int NOT NULL auto_increment PRIMARY KEY,
    Email varchar(255) NOT NULL,
    PhoneNumber varchar(255) NOT NULL,
    Civility varchar(255),
    LastName varchar(255) not null,
    FirstName varchar(255) not null,
    Address1 varchar(255),
    Address2 varchar(255),
    Address3 varchar(255),
    Address4 varchar(255),
    PostCode varchar(20),
    City varchar(255),
    State varchar(255),
    CountryCode varchar(2),
    createdAt datetime not null default NOW(),
    updatedAt datetime not null default NOW(),
    deletedAt datetime
  );
CREATE TABLE Tickets (
    id int NOT NULL auto_increment PRIMARY KEY,
    StatusCode int,
    Label varchar(255) NOT NULL,
    closed_at datetime,
    Customer_id int null,
    createdAt datetime not null default NOW(),
    updatedAt datetime not null default NOW(),
    deletedAt datetime,
    Foreign Key (Customer_ID) References Customers (id),
    Foreign Key (StatusCode) References StatusCode (id)
  );
CREATE TABLE Interventions (
    id int NOT NULL auto_increment PRIMARY KEY,
    InterventionType int NOT NULL default 0,
    Reason Text NULL,
    StatusCode int,
    StartTime datetime not null default now(),
    EndTime datetime,
    Ticket_id int null,
    User_id int not null,
    createdAt datetime not null default NOW(),
    updatedAt datetime not null default NOW(),
    deletedAt datetime,
    Foreign Key (StatusCode) References StatusCode (id),
    Foreign Key (InterventionType) References InterventionType (id),
    Foreign Key (Ticket_ID) References Tickets (id),
    Foreign Key (User_ID) References Users (id)
  );
Commit;Start TRANSACTION;
DROP DATABASE IF EXISTS Rezo;
CREATE DATABASE Rezo DEFAULT CHARSET = utf8 COLLATE utf8_bin;
Use Rezo;
SET
  default_storage_engine = INNODB;
CREATE TABLE Countries (
    id int NOT NULL auto_increment PRIMARY KEY,
    country_code varchar(2) NOT NULL,
    country_name varchar(100) NOT NULL
  );
CREATE TABLE StatusCode (
    id int NOT NULL auto_increment PRIMARY KEY,
    Label varchar(255) NOT NULL,
    createdAt datetime not null default NOW(),
    updatedAt datetime not null default NOW(),
    deletedAt datetime
  );
CREATE TABLE InterventionType (
    id int NOT NULL auto_increment PRIMARY KEY,
    Label varchar(255) NOT NULL,
    createdAt datetime not null default NOW(),
    updatedAt datetime not null default NOW(),
    deletedAt datetime
  );
CREATE TABLE Users (
    id int NOT NULL auto_increment PRIMARY KEY,
    Login varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    IsAdmin boolean not null default 0,
    createdAt datetime not null default NOW(),
    updatedAt datetime not null default NOW(),
    deletedAt datetime
  );
CREATE TABLE Customers (
    id int NOT NULL auto_increment PRIMARY KEY,
    Email varchar(255) NOT NULL,
    PhoneNumber varchar(255) NOT NULL,
    Civility varchar(255),
    LastName varchar(255) not null,
    FirstName varchar(255) not null,
    Address1 varchar(255),
    Address2 varchar(255),
    Address3 varchar(255),
    Address4 varchar(255),
    PostCode varchar(20),
    City varchar(255),
    State varchar(255),
    CountryCode varchar(2),
    createdAt datetime not null default NOW(),
    updatedAt datetime not null default NOW(),
    deletedAt datetime
  );
CREATE TABLE Tickets (
    id int NOT NULL auto_increment PRIMARY KEY,
    StatusCode int,
    Label varchar(255) NOT NULL,
    closed_at datetime,
    Customer_id int null,
    createdAt datetime not null default NOW(),
    updatedAt datetime not null default NOW(),
    deletedAt datetime,
    Foreign Key (Customer_ID) References Customers (id),
    Foreign Key (StatusCode) References StatusCode (id)
  );
CREATE TABLE Interventions (
    id int NOT NULL auto_increment PRIMARY KEY,
    InterventionType int NOT NULL default 0,
    Reason Text NULL,
    StatusCode int,
    StartTime datetime not null default now(),
    EndTime datetime,
    Ticket_id int null,
    User_id int not null,
    createdAt datetime not null default NOW(),
    updatedAt datetime not null default NOW(),
    deletedAt datetime,
    Foreign Key (StatusCode) References StatusCode (id),
    Foreign Key (InterventionType) References InterventionType (id),
    Foreign Key (Ticket_ID) References Tickets (id),
    Foreign Key (User_ID) References Users (id)
  );
Commit;