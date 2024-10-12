const p = require('./services/products')

async function main() {
  p.getFullName(324, 'teclado gamer') 
}

main()