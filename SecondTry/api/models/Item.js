/**
 * Item.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    description: {
      type: 'string',
      required: true
    },
    price: {
      type: 'number',
      required: true
    },
    sellPrice: {
      type: 'number',
      required: false
    },
    isSellable: {
      type: 'boolean',
      required: true
    },
    isQuestItem: {
      type: 'boolean',
      required: true
    },
    instanceType: {
      type: 'string',
      isIn: ['Armor', 'Weapon', 'Tool', 'Quest'],
      required: true
    },
    stats: {
      type: 'ref',
      required: true
    }

  },

  getType: function() {
    return 'Item';
  }
};

