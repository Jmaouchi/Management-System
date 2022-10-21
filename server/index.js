const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const colors = require('colors')
const schema = require('./schema/schema')
require('dotenv').config();
const connectDB = require('./config/db')
const port = process.env.PORT || 3002

// set express server
const app = express();

connectDB();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'developement',
}))


app.listen(port, console.log(`Server is running on ${port}`));