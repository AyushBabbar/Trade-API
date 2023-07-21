exports.reject = async (req, res) => {
  try {
    return res
      .status(405)
      .json({ success: false, error: 'Requested Function is not allowed' });

  }
  catch (err) {
    console.error('Error processing request:', err);
    return res
      .status(500)
      .json({ success: false, error: 'An error occurred while processing the request.' });
  }
};