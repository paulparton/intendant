describe('The home page', function(){
	
	var homePage,
		loginPage;
	
	beforeEach(function(){
		
		//Require the Home Page page object
		homePage = require('./home.po');

		//Require the Login Page page object
		loginPage = require('../login/login.po');	

	});
	
	describe('The home page for a non-logged in user', function(){
		
		beforeEach(function(){
						
			//Log the user out
			browser.get('/logout');
			
			//Navigate to the Home Page
			homePage.get();
			
		});
		
		it('should redirect to the login page if no user is logged in', function(){
			
			//Expect the URL to have redirected to /login
			browser.getCurrentUrl().then(function(url) {
				expect(url).toBe('http://127.0.0.1:1337/login');
  			});

		});
			
	});

	describe('The home page for a logged in user', function(){
		
		beforeEach(function(){
					
			//Navigate to the login page
			loginPage.get();
			
			//Log the user in
			loginPage.login('test@test.com', 'test');
			
			//Wait for the login to complete
			browser.waitForAngular();
			
			//Navigate to the Home Page
			homePage.get();	

		});
		
		afterEach(function(){
			
			//Log the user out
			loginPage.logout();
			
		});
		
		it('should have redirected to the "tasks" view', function(){

				browser.getCurrentUrl().then(function(url) {

					expect(url).toBe('http://127.0.0.1:1337/tasks');
	  			});

	  			
		});
		
	});
		

});