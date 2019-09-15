module.exports = {
  /**
   * @route   GET user/signin
   * @desc    user signin
   * @access  Public
   */
  signin: async (req, res) => {
    res.status(200).json({ message: 'User signin!' });
  },
  /**
   * @route   GET user/signup
   * @desc    user signup
   * @access  Public
   */
  signup: async (req, res) => {
    res.status(200).json({ message: 'User signup!' });
  }
};
