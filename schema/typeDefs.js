const {gql} = require('graphql-tag')

const typeDefs = gql `
    type Query {
        students: [Student]
    }
    type Student {        
        firstName: String,
        lastName: String,
        email: String
    }
`
module.exports = typeDefs