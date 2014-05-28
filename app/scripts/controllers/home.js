
//==========================================//
//Home Controller
//==========================================//
App.controller('home', ['$scope', '$resource', function($scope, $resource){
	var _pages;
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


	//Current page indicator -runs on mouseover by DOM directive
	$scope.indicator = function(){
		_pages = document.querySelectorAll('li.page');

		angular.element(_pages).css('color', '#e8e8e8');
		angular.element(_pages[this.$index]).css('color', '#8d8d8d');
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



//Filter
App.filter('newline', function(){

  return function(text){
console.log(text.indexOf(','));
  	if(text.indexOf(',') !== -1){
  		text = text.substr(0, text.indexOf(','));
  	}

  	return text;
  };
});







