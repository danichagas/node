const p = require('./services/products')
const config = require('./services/config')
const database = require('./services/database')
async function main() {
  p.getFullName(324, 'Cadeira ergonômica')
  p.getProductName('Cadeira ergonômica')

  console.log(config.version)
  database.connectToDatabase('MongoDB')
}

main()