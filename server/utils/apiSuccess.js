function apiSuccessHandler(res, statusCode, message) {
	return res.status(statusCode || 200).json({
		statusCode,
		message,
		status: "success"
	});
}

module.exports = apiSuccessHandler;