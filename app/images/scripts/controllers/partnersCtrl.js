'use strict';

window.app.factory('fullPartner', [function () {
	var partners = [
		// Brand Partners
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/aquahydrate_zps55114a99.png","PartnerType":"Brand Partners","Name":"Aquahydrate"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/arizona_zps958b9b29.png","PartnerType":"Brand Partners","Name":"Arizona Beverages"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/britvic_zpsea171a52.png","PartnerType":"Brand Partners","Name":"Britvic"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/9X45kzFkZ45_7d6ZcOadFCceDtRHqgHzSsVtWbrMtxU_zpsaca7ef20.png","PartnerType":"Brand Partners","Name":"Citrus Springs Juice"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/cytosport_zpse0eed35f.png","PartnerType":"Brand Partners","Name":"Cytosport"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/drpeppersnapple_zpse05946be.png","PartnerType":"Brand Partners","Name":"Dr. Pepper Snapple Group"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/s0CDNI0NLOJGGZU3t3JrciICoUSv8BXw0kAYEghMbxc_zpsc71eea54.png","PartnerType":"Brand Partners","Name":"New England Coffee"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/pepsi_zps88502162.png","PartnerType":"Brand Partners","Name":"PepsiCo"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/progressigs_zps2d45058b.png","PartnerType":"Brand Partners","Name":"Progressigs"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/b-bWeVdUSjGTDZwDa75ZOuwguAbGrVb5uNVCtuechYk_zpscfc8fc11.png","PartnerType":"Brand Partners","Name":"Realtree"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/tyr_zpse3a755df.png","PartnerType":"Brand Partners","Name":"TYR"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/wispak_zps7ce8ca47.png","PartnerType":"Brand Partners","Name":"Wis-Pak"},
		// Snack Brands
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/mmmars_zps324d4bae.png","PartnerType":"Snack Brands","Name":"M&M/ Mars"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/nestle_zps1cd6cac3.png","PartnerType":"Snack Brands","Name":"Nestle USA, Inc"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/hersheys_zps571f8560.png","PartnerType":"Snack Brands","Name":"Hershey Chocolate Co"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/justborn_zps6e029d02.png","PartnerType":"Snack Brands","Name":"Just Born Inc."},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/pearsoncandy_zpsee37d451.png","PartnerType":"Snack Brands","Name":"Pearson Candy"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/wrigley_zps5d6b5c7f.png","PartnerType":"Snack Brands","Name":"WM. Wrigley Jr. Co."},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/nabisco_zps5b7c4bc0.png","PartnerType":"Snack Brands","Name":"Nabisco Inc."},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/earthgrains_zps3f1953d0.png","PartnerType":"Snack Brands","Name":"Earthgrain"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/andersonerickson_zpsa82b46e2.png","PartnerType":"Snack Brands","Name":"Anderson Erickson Dairy"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/hostess_zpsebf68863.png","PartnerType":"Snack Brands","Name":"Hostess"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/littledebbie_zpsc1d9df21.png","PartnerType":"Snack Brands","Name":"Little Debbie"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/vistar_zps7cd4f262.png","PartnerType":"Snack Brands","Name":"Vistar"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/saralee_zpsdc23aedc.png","PartnerType":"Snack Brands","Name":"Sara Lee"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/robertsdairy_zpsb4e8d939.png","PartnerType":"Snack Brands","Name":"Roberts Dairy"},
		{"PhotobucketUrl":"","PartnerType":"Snack Brands","Name":"Dayton Meats"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/bunn_zps6c290a7c.png","PartnerType":"Snack Brands","Name":"Bunn Corporation"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/farnerbocken_zps65274d2f.png","PartnerType":"Snack Brands","Name":"Farner Bocken"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/westernssmokehouse_zps264658c1.png","PartnerType":"Snack Brands","Name":"Western Meat"},
		// Athletes
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/Athlete/twichell_zpsabf9e0d3.png~original","PartnerType":"Sponsored Athletes","Name":"Ashley Twichell","link":"https://twitter.com/atwich616"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/Athlete/dober_zpse17d20b1.png~original","PartnerType":"Sponsored Athletes","Name":"Drew Dober","link":"https://www.facebook.com/pages/Drew-Dober/90738598499"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/Athlete/rickels_zps330e56b5.png~original","PartnerType":"Sponsored Athletes","Name":"Caveman Rickels","link":"https://www.facebook.com/pages/David-Caveman-Rickels/194168219736"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/Athlete/chaffin_zps63cea9a1.png~original","PartnerType":"Sponsored Athletes","Name":"Morgan Chaffin","link":"http://morganchaffin.com/"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/Athlete/herring_zps6906668c.png~original","PartnerType":"Sponsored Athletes","Name":"Jamel Herring","link":"https://www.facebook.com/pages/Jamel-Herring/397620056963844"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/Athlete/steele_zpsf91d05a7.png~original","PartnerType":"Sponsored Athletes","Name":"Johnathan Steele","link":"https://twitter.com/JohnBoy_Steele"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/Athlete/grevers_zps4bde7d40.png~original","PartnerType":"Sponsored Athletes","Name":"Matt Grevers","link":"https://twitter.com/MattGrevers"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/Athlete/tollakson_zpsd440c43b.png~original","PartnerType":"Sponsored Athletes","Name":"TJ Tollakson","link":"http://tollakson.com/"},
		{"PhotobucketUrl":"http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/Partner%20Logos/Athlete/lobue_zps34af6611.png~original","PartnerType":"Sponsored Athletes","Name":"Steven LoBue","link":"https://twitter.com/divelobue"},
		// Media
		{"PhotobucketUrl":"","PartnerType":"Media Partners","Name":"CBS for KBOE","link":"http://www.kboeradio.com/"}];

	return function () {
		return partners;
	};
}]);

window.app.factory('partnerSplit', ['fullPartner', function (fullPartner) {
	return function () {
		var partnerSplit = {"Brand":[],"Snack":[],"Athlete":[],"Media":[]};
		fullPartner().forEach(function (partner) {
			if (partner.PartnerType === "Brand Partners") { partnerSplit["Brand"].push(partner); }
			else if (partner.PartnerType === "Snack Brands") { partnerSplit["Snack"].push(partner); }
			else if (partner.PartnerType === "Sponsored Athletes") { partnerSplit["Athlete"].push(partner); }
			else { partnerSplit["Media"].push(partner); }
		});
		return partnerSplit;

	};
}]);

window.app.controller('partnerCtrl', ['$scope', 'partnerSplit',  function ($scope, partnerSplit) {
	$scope.full = partnerSplit();
	$scope.partners = $scope.full["Brand"];
	$scope.active = 'Brand';
	$scope.show = function (type) {
		$scope.partners = $scope.full[type];
		$scope.active = type;
	};
}]);
