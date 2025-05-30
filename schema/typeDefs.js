const {gql} = require('graphql-tag')

const typeDefs = gql `
    type Query {
        members: [Member],
        admin(uname: String!, password: String!): Admin
    }
    type Member {        
        firstName: String,
        lastName: String,
        phone: String
    }
    type Admin {        
        id: ID!
        uname: String!
    }
    type Mutation {
        addMember(input: MemberInput!): Member,
        createAdmin(input: CreateAdminInput!): Admin!
    }
    input MemberInput {
        firstName: String!
        lastName: String!
        phone: String!
    }
    input CreateAdminInput {
        uname: String!
        password: String!
      }
`
module.exports = typeDefs