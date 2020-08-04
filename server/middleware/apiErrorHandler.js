const ApiError = require("../utils/apiError");

/*
	Need to disable lint rule because without specifying "next" as a parameter,
	error is not handled properly.
*/
// eslint-disable-next-line no-unused-vars
function apiErrorHandler(err, req, res, next) {
	if(err instanceof ApiError) {
		const { statusCode, message } = err;
		return res.status(statusCode || 400).json({statusCode, message, status: "error"});
	}
	return res.status(500).json({
		status: "error",
		statusCode: 500,
		message: "Something went wrong"
	});
}

module.exports = apiErrorHandler;