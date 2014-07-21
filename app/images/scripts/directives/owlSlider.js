window.app.directive('owl',function(){

	var linker = function(scope,element,attr){

		var loadCarousel = function(){
			element.owlCarousel({
				autoPlay: 2000,
				items : 6, //10 items above 1000px browser width
				itemsDesktop : [1000,6], //5 items between 1000px and 901px
				itemsDesktopSmall : [900,4], // 3 items betweem 900px and 601px
				itemsTablet: [600,1], //2 items between 600 and 0;
			});
		}
		scope.$watch("partners", function(value) {
			loadCarousel(element);
		})
	}

	return{
		restrict : "A",
		link: linker
	}

});
