// multerConfig.js

const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    //console.log('Filename function is being executed.'); // 添加调试输出
    cb(null, Date.now() + '-' + file.originalname);
  },
  limits: {
    fileSize: 1024 * 1024 * 10, // 限制文件大小为 10MB
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
