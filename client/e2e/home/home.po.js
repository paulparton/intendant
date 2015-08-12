var homePage = function(){
	
	//login container
	this.homeContainer = element(by.css('.container'));
	
	//logged-in elements
	
	this.get = function(){
		return browser.get('/');
	}
};

module.exports = new homePage();