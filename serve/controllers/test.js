
const ImportController = require("../controllers/admin/ImportController");
const upload = require('../config/multerConfig'); // 根据实际路径修改

const { importUsersFromExcel } = require('../models/useImport'); // 注意使用大括号来匹配导出的结构


exports.test =async (req, res) => {
 
  // console.log("sucess");

  // upload.single('excelFile')(req, res, err => {
  //   if (err) {
  //       console.error('Error during file upload:', err); // 打印错误信息
  //     return res.status(400).json({ error: 'File upload failed' });
  //   }
    
  //   // 在这里调用 ImportController.uploadFile 函数，并将文件数据传递给它
  //   console.log("sucess2");
  //   ImportController.uploadFile(req, res);
  // });



    const filePath="uploads/1692618809415-test_data.xlsx";
    const result = await importUsersFromExcel(filePath);
    return res.status(200).json({ message: 'ok' });
};
