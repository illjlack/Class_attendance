module.exports = app => {
    const UserController = require("../../controllers/admin/UserController");
    const IsTokenController = require("../../controllers/admin/IsTokenController");
    const ImportController = require("../../controllers/admin/ImportController");
    const test = require("../../controllers/test");
    const upload = require('../../config/multerConfig');

    const { authJwt } = require("../../middleware");

    var router = require("express").Router();

    router.post("/admin/login", UserController.login);
    router.post("/admin/istoken", IsTokenController.isToken);
    router.post('/admin/upload',  authJwt.verifyToken, authJwt.hasRole("admin"),upload.single('excelFile'), ImportController.uploadFile);
    router.get('/admin/getAllUsers',  authJwt.verifyToken, authJwt.hasRole("admin"),UserController.getAllUsers);
    router.post('/admin/updateUser',  authJwt.verifyToken, authJwt.hasRole("admin"),UserController.updateUser);
    
    //router.post('/admin/upload',test.test);
   
    app.use('/api', router);
};

