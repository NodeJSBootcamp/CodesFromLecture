// see https://graphql.org/learn/schema/
const schema = `
  type Query {
    helloWorld: String!
    userCollection(first: Int, after: String): ProjectConnection!
  }
  type Mutation {
    addProjectByName(name: String!, owner: String!): Boolean!
    addProjectByUrl(url: String!): Boolean!
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
    id: UUID!
    username: String!
    password: String
    isAdmin: Boolean
    isDeleted: Boolean
    created_at: Datetime!
  }
`

export default schema
