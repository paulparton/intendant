'use strict';


describe('The main template / home page', function(){
	
	var mainPage;
	
	beforeEach(function(){
		
		var url = '/';
		
		browser.get(url);
		
					
	});
	
	describe('User logged in', function(){
		
		beforeEach(function(){
			
			mainPage = require('main.po');
			
			mainPage.usernameInput.sendKeys(username);
			mainPage.passwordInput.sendKeys(password);			
			mainPage.loginButton.click();
			
		});
		
		it('Should display the logout button and profile menu', function(){
			
			//check that logout button and profile menu is displayed
			expect(mainBody.logoutButton.isDisplayed()).toBeTruthy();
			expect(mainBody.profileMenu.isDisplayed()).toBeTruthy();
			
		});
		
		it('Should hide the user menu and log out button when the user logs out', function(){
			
			//Log the user our
			mainPage.logoutButton.click().then(function(){
				
				//check that logout button and profile menu is not displayed
				expect(mainBody.logoutButton.isDisplayed()).toBeFalsy();
				expect(mainBody.profileMenu.isDisplayed()).toBeFalsy();
				
			});
			
		});
		
		it('Should display the users tasks', function(){
			
			expect(mainBody.userTasks.isDisplayed()).toBeTruthy();
			
		});
		
		it('Should display the users upcomiong alarms', function(){
			
		});
						
	});
	
	describe('No user logged in', function(){
		
		beforeEach(function(){
			
			mainPage = require('main.po');
			
		});
		
		it('Should not display the logout button and profile menu, function(){

			//check that logout button and profile menu is not displayed
			
		});
		
		it('Should not display any of the user specific boxes', function(){
			
		});
		
	});	
	
	

			
});


