
const axios = require('axios');
const graphql = require('graphql');
const House = require('./house');
const Character = require('./character');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} = graphql;

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    houses: {
      type: new GraphQLList(House),
      resolve() {
        return axios.get('https://asoiafapi.herokuapp.com/houses')
          .then(response =>  response.data);
      }
    },
    characters: {
      type: new GraphQLList(Character),
      resolve() {
        return axios.get('https://asoiafapi.herokuapp.com/characters')
          .then(response =>  response.data);
      }
    },
    house: {
      type: House,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return axios.get(`https://asoiafapi.herokuapp.com/houses/${id}`)
          .then(response =>  response.data);
      }
    },
    character: {
      type: Character,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return axios.get(`https://asoiafapi.herokuapp.com/characters/${id}`)
        .then(response =>  response.data);
      }
    }
  })
});

module.exports = RootQuery;
