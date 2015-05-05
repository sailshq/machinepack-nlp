module.exports = {


  friendlyName: 'Pluralize noun',


  description: 'Determine the plural version of a noun.',


  cacheable: true,


  sync: true,


  idempotent: true,


  inputs: {

    noun: {
      friendlyName: 'Noun',
      example: 'camera',
      description: 'The noun to pluralize.',
      required: true
    }

  },


  exits: {

    success: {
      variableName: 'plural',
      example: 'cameras',
      description: 'Done.'
    },

  },


  fn: function (inputs, exits) {
    var NLP = require('natural');
    var result = (new NLP.NounInflector()).pluralize(inputs.noun);
    return exits.success(result);
  },



};
