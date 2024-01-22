# System-management

# Project Usage Guide

This project is an application that uses Spring Boot for the BackEnd and a user interface on the FrontEnd.

## Database Setup

To use the MySQL database, simply create the database using the system command `CREATE DATABASE SYSTEM`. **Spring Data JPA** will take care of mapping the necessary classes for the database to function.

## Installation

To run the application, you will need to have Maven and Node.js installed on your system. Make sure you are in the root folder of the project and follow the next steps:

```bash
mvn clean install
npm install
```

## Usage

To run the BackEnd server, use the following command in the root folder of the Spring application:

```bash
mvn spring-boot:run
```

To run the FrontEnd application server, use the following command in the root folder of the project:

```bash
npm run dev
```

## Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is under the MIT license.
