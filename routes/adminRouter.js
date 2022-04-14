const dashboardController = require('../controller/admin/dashboardController');
const loginController = require('../controller/admin/loginController');
const userController = require('../controller/admin/userController');

const router = require('express').Router();

router.get('/admin',loginController.loginView);
router.get('/admin/dashboard',dashboardController.dashboardView);
router.get('/admin/user/list',userController.listView);
router.get('/admin/user/create',userController.createUserView);

module.exports = router;