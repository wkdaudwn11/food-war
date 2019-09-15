const express = require('express');
const router = express.Router();

import userController from '../controller/userController';

/**
 * @route   GET user/signin
 * @desc    user signin
 * @access  Public
 */
router.route('/signin').get(userController.signin);

/**
 * @route   GET user/signup
 * @desc    user signup
 * @access  Public
 */
router.route('/signup').get(userController.signup);

module.exports = router;
