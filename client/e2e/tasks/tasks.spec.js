describe('The tasks page', function(){
	
	var tasksPage,
		loginPage;
	
	beforeEach(function(){
		
		tasksPage = require('./tasks.po'),
		loginPage = require('../login/login.po');
		
		loginPage.login('test@test.com', 'test');
		
		browser.waitForAngular();
		
		tasksPage.get();
		
	});
	
	describe('for unauthorized users', function(){
		
		beforeEach(function(){
			
			loginPage.logout();
			
			browser.waitForAngular();
			
			tasksPage.get();
			
		});
		
		it('Should have redirected the user to the login page', function(){
			
			browser.getCurrentUrl().then(function(url){
				
				expect(url).toBe('http://127.0.0.1:1337/login');
				
			});
				
		});
		
	});
	
	describe('for authorized users', function(){
		
		it('should add new tasks', function(){
			
			//click add task
			
			//fill out task details
			
			//click save
			
			//expect the new task to be added to the list
			
		});
		
		it('should update existing tasks', function(){
			
			//click edit on an existing task
			
			//modify the task details
			
			//click save
			
			//click the same task
			
			//expect that the details have changed
			
		});
		
		it('should delete existing tasks', function(){
			
			//locate a task in the list and click on it
			
			//click delete
			
			//expect the task to be removed from the list
			
		});
		
		
		it('should trigger alerts when the time comes', function(){

			//Click an existing task
			
			//set the alert time to 10 seconds in the future
			
			//save
			
			//wait 15 seconds
			
			//expect the alert box to be displayed
			
		});
		
		it('should display missed alerts', function(){
			
			//Click an existing task
			
			//set the alert time to 10 seconds in the future
			
			//save
			
			//logout
			
			//wait 15 seconds
			
			//login
			
			//expect the missed alert box to be displayed
			
		});
		
	});
		
});
