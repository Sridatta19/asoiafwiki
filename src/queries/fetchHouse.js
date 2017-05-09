
import gql from 'graphql-tag';

export default gql`
  query HouseQuery($id: ID!) {
    house(id: $id){
      id
      title
      quote
      characters {
        id
        name
        quote
        likes
      }
    }
  }
`;
