import * as database from './utils/database.js'
import { getDataApi } from './utils/api.js'

database.connectToDatabase('PostgreSQL')
database.disconnectDatabase()
console.log(database.databaseType)
getDataApi()