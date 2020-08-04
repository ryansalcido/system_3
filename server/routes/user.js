const express = require("express");
const userRouter = express.Router();
const User = require("../models/User");
const { registerSchema } = require("../utils/validationSchema");
const validateForm = require("../middleware/validateForm");
const ApiError = require("../utils/apiError");
const apiSuccess = require("../utils/apiSuccess");

userRouter.post("/register", validateForm(registerSchema), (req, res, next) => {
	const { name, email, password } = req.body;
	const normalizedEmail = email.trim().toLowerCase();
	User.findOne({email: normalizedEmail}, (err, user) => {
		if(err) {
			next(ApiError.handleError(500, "Error has occurred while searching database"));
		} else if(user) {
			next(ApiError.handleError(400, "Email is already taken"));
		} else {
			const newUser = new User({name: name.trim(), password, email: normalizedEmail});
			newUser.save(err => {
				if(err) {
					next(ApiError.handleError(500, "Error has occurred during registration"));
				} else {
					return apiSuccess(res, 201, "Successfully created account!");
				}
			});
		}
	});
});

module.exports = userRouter;