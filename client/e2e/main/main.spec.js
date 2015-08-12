describe('The main template', function(){
	
	var mainPage,
		loginPage;
	
	beforeEach(function(){
		
		mainPage = require('./main.po');
		loginPage = require('../login/login.po');
					
	});
	
	describe('When a user logged in', function(){
		
		beforeEach(function(){
			
			//Navigate to the login page
			loginPage.get();
			
			//Log the user in
			loginPage.login('test@test.com', 'test');
			
			//Wait for the user login to complete
			browser.waitForAngular();
			
		});
		
		it('Should display the logout button', function(){

			//check that logout button is not displayed
			expect(mainPage.logoutButton.isDisplayed()).toBeTruthy();

		});

		it('Should display the profile menu', function(){

			//check that profile menu is not displayed
			expect(mainPage.userProfileMenu.isDisplayed()).toBeTruthy();

		});
		

		
		it('Should display the users tasks', function(){
			
			//expect(mainPage.userTasks.isDisplayed()).toBeTruthy();
			
		});
		
		it('Should display the users upcomiong alarms', function(){
			
		});
						
	});
	
	describe('No user logged in', function(){
		
		beforeEach(function(){
			
			//Make sure no user is logged in
			loginPage.logout();
			
			//Wait for logout
			browser.waitForAngular();
			
		});
		
		it('Should not display the logout button', function(){

			//check that logout button is not displayed
			expect(mainPage.logoutButton.isDisplayed()).toBeFalsy();

		});

		it('Should not display the profile menu', function(){

			//check that profile menu is not displayed
			expect(mainPage.userProfileMenu.isDisplayed()).toBeFalsy();

		});
					
		it('Should not display any of the user specific boxes', function(){
			
		});
		
	});	
	
	

			
});


