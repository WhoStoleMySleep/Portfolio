import { gql } from '@apollo/client';

const ALL_BLOGS = gql`
  query Query {
    blogs {
      id
      headImageLink
      name
      tags
      conciseContent
      date
      author
      text
    }
  }
`

const FIND_BLOG = gql`
  query Query($id: String!) {
    blog(id: $id) {
      id
      headImageLink
      name
      tags
      conciseContent
      date
      author
      text
    }
  }
`

// const SAVE_BLOG = gql`
//   mutation Mutation($id: String!, $headImageLink: String!, $name: String!, $tags: String!, $conciseContent: String!, $date: String!, $author: String!, $text: [[String!]!]!) {
//     createBlog(id: $id, headImageLink: $headImageLink, name: $name, tags: $tags, conciseContent: $conciseContent, date: $date, author: $author, text: $text) {
//       id
//     }
//   }
// `

// const REMOVE_BLOG = gql`
//   mutation Mutation($id: String!) {
//     removeBlog(id: $id)
//   }
// `

export {
  ALL_BLOGS,
  FIND_BLOG,
  // SAVE_BLOG,
  // REMOVE_BLOG,
}