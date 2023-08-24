module.exports = (sequelize, DataTypes) => {
    const AttendanceConfig = sequelize.define("AttendanceConfig", {
      start_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      longitude: {
        type: DataTypes.STRING,
        allowNull: false
      },
      latitude: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address_range: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
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
  
    return AttendanceConfig;
  };
  