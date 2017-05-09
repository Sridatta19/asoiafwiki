
import gql from 'graphql-tag';

export default gql`
  {
    characters {
      id
      name
      likes
      quote
    }
  }
`;
