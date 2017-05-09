
const axios = require('axios');
const graphql = require('graphql');
const Character = require('./character');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
    GraphQLString
} = graphql;

const House = new GraphQLObjectType({
  name:  'House',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    quote: { type: GraphQLString },
    characters: {
      type: new GraphQLList(Character),
      resolve(parentValue) {
        return axios.get(`https://asoiafapi.herokuapp.com/houses/characters/${parentValue.id}`)
          .then(response =>  response.data);
      }
    }
  })
});

  module.exports = House;
