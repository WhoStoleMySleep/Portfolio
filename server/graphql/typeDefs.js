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

  type Cakes {
    id: String!
    image: String!
    title: String!
    category: String!
    amount: String!
    description: String!
    mass: String!
    content: String!
    composition: String!
    additionally: String!
  }

  type CakesNumber {
    id: String!
    number: String!
  }

  type OurCakes {
    id: String!
    order: [[String!]!]!
  }

  type CustomCakes {
    id: String
    customCakes: [[String!]!]!
  }

  type Query {
    blogs: [Blog!]
    blog(id: String!): Blog
    cakes: [Cakes!]
    cake(id: String!): Cakes
    cakesNumber: [CakesNumber!]
    ourCakes: [OurCakes!]
    customCakes: [CustomCakes!]
  }

  type Mutation {
    createBlog(id: String!, headImageLink: String!, name: [String!]!, tags: String!, conciseContent: [String!]!, date: String!, author: String!, text: [[String!]!]!): Blog!
    removeBlog(id: String!): String!
    createCake(id: String!, image: String!, title: String!, category: String!, amount: String!, description: String!, mass: String!, content: String!, composition: String!, additionally: String!): Cakes!
    removeCake(id: String!): String!
    createCakesNumber(id: String!, number: String!): CakesNumber!
    removeCakesNumber(id: String!): String!
    createOurCakes(id: String!, order: [[String!]!]!): OurCakes!
    removeOurCakes(id: String!): String!
    createCustomCakes(id: String!, customCakes: [[String!]!]!): CustomCakes!
    removeCustomCakes(id: String!): String!
  }
`;