module.exports = {


  friendlyName: 'Tokenize string',


  description: 'Split a string into an array of strings using the Treebank algorithm.',


  extendedDescription: 'Like `split` from `machinepack-strings`, but instead of a regular expression, this machine uses a specialized algorithm for natural language processing.',


  moreInfoUrl: 'http://www.cis.upenn.edu/~treebank/tokenization.html',


  cacheable: true,


  sync: true,


  inputs: {

    string: {
      friendlyName: 'String',
      example: 'Hello world!',
      description: 'The string to split.',
      required: true
    }

  },


  exits: {

    success: {
      variableName: 'tokens',
      description: 'Returns an array of tokens derived from the string.',
      example: ['Hello', 'world', '!']
    },

  },


  fn: function (inputs,exits) {
    var TreebankWordTokenizer = require('natural').TreebankWordTokenizer;
    var result = (new TreebankWordTokenizer()).tokenize(inputs.string);
    return exits.success(result);
  },



};
