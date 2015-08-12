exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['client/e2e/login/login.spec.js'],
	params: {
		baseUrl: 'http://127.0.0.1:1337'
	}
};