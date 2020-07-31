module.exports = {
	"env": {
		"commonjs": true,
		"es6": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 11
	},
	"rules": {
		"indent": ["error", "tab"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"eol-last": ["error", "never"],
		"comma-dangle": ["error", "never"]
	}
};