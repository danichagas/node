async function getFullName(codeId, productName) {
  console.log(`Código: ${codeId} --- Nome do produto: ${productName}`)
}

async function getProductName(productName) {
  console.log(`Nome do produto: ${productName}`)
}

module.exports = {
  getFullName,
  getProductName
}