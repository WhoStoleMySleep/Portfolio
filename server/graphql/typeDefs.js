const { gql } = require('apollo-server');

module.exports = gql`
  type Blog {
    id: String!
    headImageLink: String!
    name: String!
    tags: String!
    conciseContent: String!
    date: String!
    author: String!
    text: [String!]!
  }

  input BlogInput {
    id: String!
    headImageLink: String!
    name: String!
    tags: String!
    conciseContent: String!
    date: String!
    author: String!
    text: [String!]!
  }

  type Query {
    blogs: [Blog!]
  }

  type Mutation {
    createBlog(id: String!, headImageLink: String!, name: String!, tags: String!, conciseContent: String!, date: String!, author: String!, text: [String!]!): Blog!
    updateBlog(id: ID!, text: String!): [Blog!]
    removeBlog(id: ID!): String!
  }
`;
