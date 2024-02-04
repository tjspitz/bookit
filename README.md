<h1 align="center">
  <br>
    🚅💨 BookIt
    <h3 align="center">
        <i>A small-scale demo app for booking fares. In this case, for a train.</i>
      <br>
    </h3>
    <br>
</h1>

## Technologies Used

### Setup
<!-- NPM -->
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)


### Frontend
<!-- React -->
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
<!-- JavaScript -->
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
<!-- TypeScript -->
![TypeScript](https://img.shields.io/badge/typescript-27609E?style=for-the-badge&logo=typescript&logoColor=white)
<!-- Bootstrap -->
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)


### Backend
<!-- Java -->
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
<!-- Spring -->
![Spring](https://img.shields.io/badge/spring-6db33f?style=for-the-badge&logo=spring&logoColor=white)
<!-- mySQL -->
![mySQL](https://img.shields.io/badge/mysql-00758F?style=for-the-badge&logo=mysql&logoColor=white)


## 🚀 Getting Started

- You will need to configure your own `application.properties` file within the `/server/src/main/resources` directory, as it is `.gitignore`d
  - ```
    spring.datasource.url=jdbc:mysql://localhost:3306/<your-db-to-use>
    spring.datasource.username=root
    spring.datasource.password=<your-mysql-password>
    spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    ```
- Run `npm install` while within the `/client` directory
  - Run `npm run dev` once packages have installed
- Either from the Eclipse IDE or from your CLI, boot up the backend
  - Make sure you are in the `server/src/main/java` dir: `BookitApplication.java`
- Open your browser, go to [localhost](http:localhost:5173), and look around

