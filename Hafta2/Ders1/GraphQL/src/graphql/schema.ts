// see https://graphql.org/learn/schema/
const schema = `
  type Query {
    helloWorld: String!
    userCollection: userConnection!
  }
  type Mutation {
    register(username: String!, password: String!): Boolean!
    login(username: String!, password: String!): Boolean!
  }
  type userConnection {
    edges: [userEdge!]!
    pageInfo: PageInfo!
  }
  
  type userEdge {
    cursor: String!
    node: user!
  }
  
  type PageInfo {
    endCursor: String
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
  }
  type user {
    id: String!
    username: String!
    password: String
    isAdmin: Boolean
    isDeleted: Boolean
    created_at: String!
  }
`

export default schema
