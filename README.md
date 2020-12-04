# SQL (sqlite / mysql / postgres)

## Discription

---

This module is developed to extend our base server. It can be easily installed with the Plugin script from the base module. For detailed Information please see [@base-server](https://github.com/dominikhaid/node-base-server.git)

### Module Features

- Add support for sql dialects sqlite, mysql and postgres
- Add ready to use docker-compose for mysql annd mysqladmin
- Add ready to use docker-compose for postgres annd pgadmin4
- Add sample data, functions and routes



### Setup

---

> git clone https://github.com/dominikhaid/node-base-server.git my-app
> 
> cd my-app
> 
> npm run plugin p=https://github.com/dominikhaid/node-module-sql.git
> 
> npx sequelize-cli db:migrate
> 
> npx sequelize-cli db:seed --seed 20200602234904-demo-user
> 
> npm run dev
> 
> visit http://localhost/api/db/users

**NOTE:**  all endpoinnts are documented in ./src/http



### Sequlize
```
Sequlize unfiys all SQL dialects. You can use excat the same syntax for every dialect. 
```
- ./src/config/sql-config.json