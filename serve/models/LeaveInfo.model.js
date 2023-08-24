module.exports = (sequelize, DataTypes) => {
    const LeaveInfo = sequelize.define("LeaveInfo", {
      start_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: true
      },
      reason: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      audit_user_id: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      audit_result: {
        type: DataTypes.STRING,
        allowNull: true
      },
      audit_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
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
  
    return LeaveInfo;
  };
  