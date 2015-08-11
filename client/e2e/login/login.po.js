var LoginPage = function(){
	
	//login container
	this.loginContainer = element(by.css('.login-form'));
	
	//login elements
	this.userNameInput = this.loginContainer.element(by.css('#email-input'));
	this.passwordInput = this.loginContainer.element(by.css('#password-input'));
	this.loginButton = this.loginContainer.element(by.css('#login-button'));
	
	this.login = function(email, password){
		
		this.userNameInput.sendKeys(email);
		this.passwordInput.sendKeys(password);
		
		return this.loginButton.click();
		
	}

};

module.exports = new LoginPage();