

//Filter Dimensions if more than one found
App.filter('newline', function(){

  return function(text){
  	if(text.indexOf(',') !== -1){
  		text = text.substr(0, text.indexOf(','));
  	}

  	return text;
  };
});