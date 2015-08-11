describe('The home page', function(){
	
	var homePage;
	
	beforeEach(function(){
		
		browser.get('/');

	});
	
	describe('The home page for a non-logged in user', function(){
		
		it('Should redirect to the login page if no user is logged in', function(){
			
			//Expect the URL to have redirected to /login
			
		});
			
	});

	describe('The home page for a logged in user', function(){
		
		beforeEach(function(){
			
			homePage = require('homePage.po');
			
		});
		
		it('Should have redirected to the "tasks" view', function(){
			
		});
		
	});
		

});