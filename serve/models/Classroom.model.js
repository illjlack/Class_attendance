module.exports = (sequelize, DataTypes) => {
    const Classroom = sequelize.define("Classroom", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      }
      
    });

    Classroom.associate = (models) => {
        Classroom.belongsTo(models.UserInfo, { as: 'teacher', foreignKey: 'teacherId' });
        Classroom.belongsTo(models.UserInfo, { as: 'counselor', foreignKey: 'counselorId' });
        Classroom.belongsTo(models.AttendanceConfig, { foreignKey: 'attendanceConfigId' });
        Classroom.belongsTo(models.LeaveInfo, { foreignKey: 'leaveInfoId' });
      };


    return Classroom;
  };
  