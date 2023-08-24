module.exports = (sequelize, DataTypes) => {
    const UserInfo = sequelize.define("UserInfo", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      login: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      create_by: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      create_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    });
    return UserInfo;
  };
  