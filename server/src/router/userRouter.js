const express = require('express');
const router = express.Router();

import userController from '../controller/userController';

/**
 * @route   GET user/test
 * @desc    Tests user route
 * @access  Public
 */
router.route('/test').get(userController.test);

module.exports = router;
