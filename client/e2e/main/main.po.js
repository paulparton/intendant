var mainPage = function(){
	
	//navigation container
	this.navContainer = element(by.id('nav'));
	
	//logged in menu items
	this.userProfileMenu = this.navContainer.element(by.css('#user-profile-menu'));
	this.logoutButton = this.navContainer.element(by.css('#user-logout-button'));
	
	//logged out menu items
	this.loginButton = this.navContainer.element(by.css('#login-button'));
	
	//Body
	this.bodyContainer = element(by.css('.container'));
  	
	//User elements
	this.userProfileMenu = element(by.css('#user-profile-menu'));

};

module.exports = new mainPage();