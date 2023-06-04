day-3 migrations

1.  npm install --save-dev sequelize-cli
2.  npx sequelize-cli init
<!-- this will automatically create 3 folders config, migrations and models -->
3.  go to config.json and add your own config i.e username, pw and dialect
<!-- add migration to db -->
4.  npx sequelize-cli db:migrate
<!-- generate migration -->
5.  npx sequelize-cli migration:generate --name kritesh
    <!-- add your model inside migraton inside async up -->
    <!-- then migrate your model to db -->
6.  npx sequelize-cli db:migrate
