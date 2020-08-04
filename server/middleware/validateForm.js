const ApiError = require("../utils/apiError");

function validateForm(schema) {
	return async (req, res, next) => {
		try {
			const validatedBody = await schema.validate(req.body);
			req.body = validatedBody;
			next();
		} catch(err) {
			next(ApiError.handleError(400, err));
		}
	};
}

module.exports = validateForm;