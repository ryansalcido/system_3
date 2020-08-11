class ApiError {
	constructor(statusCode, payload) {
		this.statusCode = statusCode;
		this.payload = payload;
	}

	static handleError(statusCode, payload) {
		return new ApiError(statusCode, payload);
	}
}

function handleSuccess(res, statusCode, payload) {
	return res.status(statusCode || 200).json({
		statusCode,
		payload,
		status: "success"
	});
}

module.exports = {
	ApiError,
	handleSuccess
};