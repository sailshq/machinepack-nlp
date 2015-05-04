module.exports = {


  friendlyName: 'Get Levenshtein distance',


  description: 'Determine the Levenstein distance between two strings.',


  extendedDescription: 'The Levenshtein distance is a number that helps quantify the difference between two strings.  Informally, the Levenshtein distance between two words is the minimum number of single-character edits (i.e. insertions, deletions or substitutions) required to change one word into the other.',


  useCases: [
    'fuzzy search',
    'spell check',
    'ocr',
    'translation'
  ],


  moreInfoUrl: 'http://en.wikipedia.org/wiki/Levenshtein_distance',


  cacheable: false,


  sync: false,


  inputs: {

    a: {
      friendlyName: 'A string',
      example: 'kitten',
      required: true
    },

    b: {
      friendlyName: 'Another string',
      example: 'sittin',
      required: true
    },

  },


  exits: {

    success: {
      description: 'Done.',
      example: 2
    }

  },


  fn: function (inputs,exits) {
    var natural = require('natural');
    var result = natural.LevenshteinDistance(inputs.a, inputs.b);
    return exits.success(result);
  },



};
