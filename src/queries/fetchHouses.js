
import gql from 'graphql-tag';

export default gql`
  {
    houses {
      id
      title
      quote
    }
  }
`;
