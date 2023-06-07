const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rounds extends Model {
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: 'user_id' });
      this.belongsTo(models.Decks, { foreignKey: 'deck_id' });
    }
  }
  Rounds.init({
    user_id: DataTypes.INTEGER,
    deck_id: DataTypes.INTEGER,
    first_guess_correct: DataTypes.INTEGER,
    total_guesses: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Rounds',
  });
  return Rounds;
};
