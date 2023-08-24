module.exports = (sequelize, DataTypes) => {
    const AttendanceRecord = sequelize.define("AttendanceRecord", {
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
      sign_in_config_id: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      audit_result: {
        type: DataTypes.STRING,
        allowNull: true
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
  
    return AttendanceRecord;
  };
  