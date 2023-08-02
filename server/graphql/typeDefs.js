const { gql } = require('apollo-server');

module.exports = gql`
  type Blog {
    id: String!
    headImageLink: String!
    name: [String!]!
    tags: String!
    conciseContent: [String!]!
    date: String!
    author: String!
    text: [[String!]!]!
  }

  input BlogInput {
    id: String!
    headImageLink: String!
    name: [String!]!
    tags: String!
    conciseContent: [String!]!
    date: String!
    author: String!
    text: [[String!]!]!
  }

  type Query {
    blogs: [Blog!]
    blog(id: String!): Blog
  }

  type Mutation {
    createBlog(id: String!, headImageLink: String!, name: [String!]!, tags: String!, conciseContent: [String!]!, date: String!, author: String!, text: [[String!]!]!): Blog!
    removeBlog(id: String!): String!
  }
`;
