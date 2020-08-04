class ApiError {
	constructor(statusCode, message) {
		this.statusCode = statusCode;
		this.message = message;
	}

	static handleError(statusCode, message) {
		return new ApiError(statusCode, message);
	} 
}

module.exports = ApiError;