const xlsx = require('xlsx'); 

const db = require("../models");
const UserInfo = db.UserInfo;


async function importUsersFromExcel(filePath) {
    console.log("here");
    try {
      const workbook = xlsx.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
      let successCount = 0;
      let failedCount = 0;
  
      for (const row of sheetData) {
        const existingUser = await UserInfo.findOne({
          where: { login: row.login }
        });
  
        if (existingUser) {
          failedCount++;
        } else {
          await UserInfo.create({
            name: row.name,
            login: row.login,
            password: row.password,
            role: row.role,
            status: row.status,
            create_by: row.create_by,
          });
          successCount++;
        }
      }
  
      const message = `成功导入 ${successCount} 个用户。由于重复的用户名，有 ${failedCount} 个用户未导入。`;
  
      return { success: true, message };
    } catch (error) {
      console.error('导入数据时出错：', error);
      return { success: false, message: '导入数据时发生错误。' };
    }
  }

  module.exports =  {importUsersFromExcel} ;
  