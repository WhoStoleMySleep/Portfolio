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
  query Blog($id: String!) {
    blog(id: $id) {
      id
      headImageLink
      name
      tags
      date
      author
      text
    }
  }
`

export {
  ALL_BLOGS,
  FIND_BLOG
}