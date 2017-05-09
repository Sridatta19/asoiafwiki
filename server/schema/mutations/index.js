
const graphql = require('graphql');
const axios = require('axios');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const House = require('../root_query_type/house');
const Character = require('../root_query_type/character');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addHouse: {
      type: House,
      args: {
        title: { type: GraphQLString },
        quote: { type: GraphQLString }
      },
      resolve(parentValue, { title, quote }) {
        return axios.post(`https://asoiafapi.herokuapp.com/houses/addHouse?title=${title}&quote=${quote}`)
          .then(response =>  response.data);
      }
    },
    addCharacterToHouse: {
      type: House,
      args: {
        name: { type: GraphQLString },
        quote: { type: GraphQLString },
        houseId: { type: GraphQLID }
      },
      resolve(parentValue, { name, houseId, quote }) {
        return axios.post(`https://asoiafapi.herokuapp.com/characters/addCharacter?houseId=${houseId}&name=${name}&quote=${quote}`)
          .then(response =>  response.data);
      }
    },
    likeCharacter: {
      type: Character,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return axios.post(`https://asoiafapi.herokuapp.com/characters/likeCharacter/${id}`)
          .then(response =>  response.data);
      }
    },
    deleteHouse: {
      type: House,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return axios.post(`https://asoiafapi.herokuapp.com/houses/deleteHouse/${id}`)
          .then(response =>  response.data);
      }
    }
  }
});

module.exports = mutation;
