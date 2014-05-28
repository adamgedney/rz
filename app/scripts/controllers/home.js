
//==========================================//
//Home Controller
//==========================================//
App.controller('home', ['$scope', '$resource', function($scope, $resource){
	var _pages;
	var _lastIndex;
	var JSON_PATH 	= 'TestProject.json';
	var productData = $resource(JSON_PATH);




	//=======================================//
	//GET product data
	//=======================================//
	productData.get(function(data){

		//items
		$scope.items = data.items;

		//Company obj
		$scope.company = {
			name : data.CompanyName,
			logo : 'http://images.repzio.com/productimages/' + data.ManufacturerID + '/logo' + data.ManufacturerID + '_lg.jpg'
		}

		//Sales rep obj
		$scope.rep = {
			name 	: data.SalesRep.FirstName + " " + data.SalesRep.LastName,
			email 	: data.SalesRep.EmailAddress,
			phone	: data.SalesRep.Phone
		}


		//Generate favicon
		loadFavicon($scope.company.logo);

	});//get


	//Toggle details
	$scope.toggleDetails = function(id){

		if(_lastIndex !== id){
			$scope.showDetails = id;
			_lastIndex = id;
		}else{

			_lastIndex = null;
			$scope.showDetails = null;
		}
	};


















	//=======================================//
	//Controller Methods
	//=======================================//


	//Async favicon loading
	function loadFavicon(logo){
		//Insert favicon link async
	   	var fav = document.createElement('link');
		   fav.rel = 'shortcut icon';
		   fav.async = true;
		   fav.href = logo;

	   	var tag = document.getElementsByTagName('link')[0];
	   		tag.parentNode.insertBefore(fav, tag);

	};


}]);//Controller










