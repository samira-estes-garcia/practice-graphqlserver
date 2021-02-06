const express = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema.js')
const PORT = process.env.PORT || 5000
const cors = require( `cors` )

const app = express()

app.use( cors() );
app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      graphiql: true,
    })
  )

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))