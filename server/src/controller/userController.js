module.exports = {
  /**
   * @controller  GET user/test
   * @desc        Tests user controller
   */
  test: async (req, res) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        message: 'test'
      })
    };
    res.status(200).json({ response });
  }
};
