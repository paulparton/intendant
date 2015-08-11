describe('The login page', function(){
	
	var loginPage;
	
	beforeEach(function(){
		
		browser.get('http://127.0.0.1:1337/login');
		loginPage = require('./login.po');

	});
	
	
	it('Should raise an error if an unknown email and password combination are submitted', function(){
		
		loginPage.login('test@test.com', 'test').then(function(){
			
			browser.getCurrentUrl().then(function(url) {
				expect(url).toBe('/login');
  			});
  		
		},10000)
		
	});

	
	it('Should invalidate the form if an invalid email address is entered', function(){
		
	});

	
	it('Should raise an error if the user attempts to login with no password.', function(){
		
	});
		
	it('Should redirect the user back to the page they came from on success when possible', function(){
		
	});
	
	it('Should redirect the user to the home page on success if no "previous page" is provided', function(){
		
		loginPage.login('test@test.com', 'test').then(function(){
			
			browser.getCurrentUrl().then(function(url) {
				expect(url).toBe('/');
  			});
  		
		},10000)
		
	});
		

	
});