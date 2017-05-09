
const axios = require('axios');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
    GraphQLString
} = graphql;

const Character = new GraphQLObjectType({
  name:  'Character',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    name: { type: GraphQLString },
    quote: { type: GraphQLString },
    house: {
      type: require('./house'),
      resolve(parentValue) {
        return axios.get(`https://asoiafapi.herokuapp.com/characters/${parentValue.id}`)
          .then(response =>  axios.get(`https://asoiafapi.herokuapp.com/houses/${response.data.houseId}`))
          .then(response => response.data);
      }
    }
  })
});

module.exports = Character;
