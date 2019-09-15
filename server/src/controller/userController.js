module.exports = {
  /**
   * @controller  GET user/test
   * @desc        Tests user controller
   */
  test: async (req, res) => {
    res.status(200).json({ message: 'User test!' });
  }
};
