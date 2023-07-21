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

export {
  ALL_BLOGS
}