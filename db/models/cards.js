const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cards extends Model {
    static associate(models) {
      this.hasMany(models.Cards, { foreignKey: 'deck_id' });
      this.hasOne(models.Guesses, { foreignKey: 'card_id' });
    }
  }
  Cards.init({
    deck_id: DataTypes.INTEGER,
    question: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Cards',
  });
  return Cards;
};
