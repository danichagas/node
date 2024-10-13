import * as database from './utils/database.js'

database.connectToDatabase('PostgreSQL')
database.disconnectDatabase()
console.log(database.databaseType)