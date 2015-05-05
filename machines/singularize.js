module.exports = {


  friendlyName: 'Singularize noun',


  description: 'Determine the singular version of a plural noun.',


  cacheable: true,


  sync: true,


  idempotent: true,


  inputs: {

    noun: {
      friendlyName: 'Noun',
      example: 'cameras',
      description: 'A plural noun.',
      required: true
    }

  },


  exits: {

    success: {
      variableName: 'singular',
      example: 'camera',
      description: 'Done.'
    },

  },


  fn: function (inputs, exits) {
    var NLP = require('natural');
    var result = (new NLP.NounInflector()).singularize(inputs.noun);
    return exits.success(result);
  },



};
