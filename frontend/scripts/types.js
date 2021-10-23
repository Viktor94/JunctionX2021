const { generateApi } = require('swagger-typescript-api')
const path = require('path')
const fs = require('fs')

generateApi({
    name: 'apiTypes',
    url: 'http://localhost:8080/v3/api-docs/',
    httpClientType: 'axios',
})
    .then(({ files }) => {
        const { content } = files[0]
        const outPath = path.join(__dirname, '..', 'lib/api/generated/generatedApi.ts')
        fs.writeFileSync(outPath, content)
    })
    .catch(e => console.error(e))