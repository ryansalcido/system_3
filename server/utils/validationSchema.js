const yup = require("yup");

module.exports = {
	registerSchema: yup.object().shape({
		name: yup.string()
			.min(3, "Must be at least 3 characters")
			.required("Required"),
		email: yup.string()
			.email("Invalid email address")
			.required("Required"),
		password: yup.string()
			.min(8, "Must be at least 8 characters")
			.required("Required")
	}),
	loginSchema: yup.object().shape({
		email: yup.string()
			.required("Required"),
		password: yup.string()
			.required("Required")
	})
};