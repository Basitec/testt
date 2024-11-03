const express = require('express');
const userController = require('../controller/usercontroller')
const router = express.Router();
const upload = require('../controller/usercontroller').upload;

router.route('/practise')
.get(userController.practiceUser)
.post(upload.single('myFile'),userController.handlePost)


module.exports = router;