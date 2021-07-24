## MySQL with NodeJS
### package install
``` bash
$ npm i express morgan nunjucks sequelize sequelize-cli mysql2
$ npm i -D nodemon
```
### Config to connect mySQL
Make a folder "config" and create config.json file
``` json
{
  "development": {
    "username": <<User>>,
    "password": <<Password>>,
    "database": <<mySQL Database>>,
    "host": <<mySQL Hostname>>,
    "dialect": "mysql"
  },
  "test": {
    "username": <<User>>,
    "password": <<Password>>,
    "database": <<mySQL Database>>,
    "host": <<mySQL Hostname>>,
    "dialect": "mysql"
  },
  "production": {
    "username": <<User>>,
    "password": <<Password>>,
    "database": <<mySQL Database>>,
    "host": <<mySQL Hostname>>,
    "dialect": "mysql"
  }
}
```
### Running Node
``` bash
$ npm start
```
The address to access
http://localhost:3001/
