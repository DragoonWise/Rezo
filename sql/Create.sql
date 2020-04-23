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
    created_at datetime not null default NOW(),
    updated_at datetime not null default NOW(),
    deleted_at datetime
  );
CREATE TABLE InterventionType (
    id int NOT NULL auto_increment PRIMARY KEY,
    Label varchar(255) NOT NULL,
    created_at datetime not null default NOW(),
    updated_at datetime not null default NOW(),
    deleted_at datetime
  );
CREATE TABLE Users (
    id int NOT NULL auto_increment PRIMARY KEY,
    Login varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    IsAdmin boolean not null default 0,
    created_at datetime not null default NOW(),
    updated_at datetime not null default NOW(),
    deleted_at datetime
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
    created_at datetime not null default NOW(),
    updated_at datetime not null default NOW(),
    deleted_at datetime
  );
CREATE TABLE Tickets (
    id int NOT NULL auto_increment PRIMARY KEY,
    StatusCode int,
    Label varchar(255) NOT NULL,
    closed_at datetime,
    Customer_Id int null,
    created_at datetime not null default NOW(),
    updated_at datetime not null default NOW(),
    deleted_at datetime,
    Foreign Key (Customer_Id) References Customers (Id),
    Foreign Key (StatusCode) References StatusCode (Id)
  );
CREATE TABLE Interventions (
    id int NOT NULL auto_increment PRIMARY KEY,
    InterventionType int NOT NULL default 0,
    Reason Text NULL,
    StatusCode int,
    StartTime datetime not null default now(),
    EndTime datetime,
    Ticket_Id int null,
    User_Id int not null,
    created_at datetime not null default NOW(),
    updated_at datetime not null default NOW(),
    deleted_at datetime,
    Foreign Key (StatusCode) References StatusCode (Id),
    Foreign Key (InterventionType) References InterventionType (Id),
    Foreign Key (Ticket_Id) References Tickets (Id),
    Foreign Key (User_Id) References Users (Id)
  );
Commit;