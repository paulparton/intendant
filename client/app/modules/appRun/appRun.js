define(['app'], function(app){
	
	runApplication.$inject = ['$couchPotato'];
	
	function runApplication($couchPotato){
		app.lazy = $couchPotato;
	}
	
	app.run(runApplication);
	
	return runApplication;
});