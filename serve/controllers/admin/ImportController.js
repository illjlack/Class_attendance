const {importUsersFromExcel} = require('../../models/useImport');

exports.uploadFile = async (req, res) => {
    //console.log(req);
    try {
      const filePath = req.file.path;
      
      const result = await importUsersFromExcel(filePath);

      if (result.success) {
        res.status(200).json({ message: result.message });
      } else {
        res.status(500).json({ message: result.message });
      }
    } catch (error) {
      console.error('An error occurred while processing the file:', error);
      res.status(500).json({ message: 'An error occurred while processing the file.' });
    }
};
