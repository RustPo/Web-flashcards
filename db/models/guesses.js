const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Guesses extends Model {
    static associate(models) {
      this.belongsTo(models.Cards, { foreignKey: 'card_id' });
    }
  }
  Guesses.init({
    card_id: DataTypes.INTEGER,
    guess_correct: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Guesses',
  });
  return Guesses;
};
