const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Decks extends Model {
    static associate(models) {
      this.hasMany(models.Cards, { foreignKey: 'deck_id' });
      this.hasMany(models.Rounds, { foreignKey: 'deck_id' });
    }
  }
  Decks.init({
    name_deck: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Decks',
  });
  return Decks;
};
