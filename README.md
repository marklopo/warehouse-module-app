# warehouse-module-app
 The project contains the source code of one of many elements of the WMS application of a company that has a product warehouse. The module is responsible for supervising warehouse equipment such as reach trucks. This element is an electronic daily equipment inspection book.

## Purpose of the project
The application can be an example of the design of one of the modules of the Warehouse Management System. This component is responsible for collecting information on the visual assessment of the technical condition of warehouse vehicles. This assessment can be carried out by operators who perform this activity before starting work on a particular piece of equipment.

## Tools and technologies
 
### Backend:
Languages: Java SE, SQL; 
Framework: Eclipse, Spring Tool Suite, Hibernate, Spring(Data, MVC, Security, Boot, Cache - Ehcache), Gradle; 
Database: MySQL; 
Libraries: Lombok; 
Tests: JUnit, Postman;
Documentation: Swagger OpenApi

### Frontend:
Languages: TypeScript, HTML, CSS
Framework: Angular, Visual Studio Code, 
Library: Angular Material, 
Tests: Jasmine, Karma, Cypress;
Documentation: Compodoc


## Basic assumptions of the project
The application is designed to collect information on the condition of storage vehicles before the operator starts servicing them. Through mobile devices mounted on the equipment, the information will be transmitted with the help of a wireless network to the person responsible for work safety, such as a leader. If the system receives information about equipment failure it will send it to the leader, whose task will be to immobilize the equipment.

## Main requirements
The application is to be available to any user assigned to the system. The leader will be able to access information in real time while the operator will be able to access information before starting work on the equipment. The module must be easy to use, intuitive, error-free and quick to operate.

## System requirements
Wireless internet access, mobile devices such as tablets, laptops and scanners are required.

## Functional requirements
Main application tasks assigned to actors (Administrator/Leader, Operator):
- adding and editing a user (Administrator/ Leader),
- adding and editing equipment (Administrator/ Leader),
- adding inspections (Administrator/ Leader, Operator),
- Generate report of inspections performed (Administrator/ Leader)

## Objects 
1. The User object contains such information as: name, surname, position, department, login, password.
2. Equipment object contains: name, model, serial number, registration number.
3. The Report object contains: date of inspection addition, operators' data, statuses of individual components and subassemblies checked, comments.

## Summary
The application requires continuous improvement, so by definition it must be flexible and adaptable to necessary changes and expansion with new modules and functionalities or more detailed data on individual objects.
