'use strict';

window.app.factory('officersSrvc', [function () {
	return function () {
		var officers = [
	    {
	        link: 'Branden-Muhl',
	        title: 'Chief Executive Officer (CEO)',
	        img: 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/About/BrandenMuhl_zpsbf109d44.jpg',
	        content: [
	        	'As CEO of Mahaska, Branden Muhl drives overall vision and strategy for the company. He is a fifth generation owner of Mahaska, continuing more than a century of heritage in formulating, manufacturing, marketing, and distributing food and beverage products. Having grown up in Kansas and worked in the Mahaska facilities all over the Midwest, Muhl has always taken a strong interest in the family business. He purchased Mahaska in 2012 upon the retirement and transition to Chairman of the Board by his father, Bradley Muhl, continuing the tradition of consolidated ownership under a single leader that was revived under Brad.',
	        	'Muhl continues to expand upon his father’s business development efforts at Mahaska by building an independently owned brand portfolio and engaging in territorial expansion. In addition, he oversees Mahaska’s marketing strategy, which is consistent with its independent bottling roots while also improving customer experience with new technology and a fresh look. While Mahaska will continue to innovate, Muhl is steadfast in maintaining the timeless, traditional feel of the bottling company that he grew up with in the Midwest.',
	        	'In addition to his role at Mahaska, Branden also serves as co-founder of Odin Brands, an endurance-focused food and beverage company specializing in athletic products. Muhl founded the company in 2011 with Matthew Dilorenzo, CEO of TYR Sport Inc. The pair launched the first product under the Odin Brands name in 2013, TYR Endurance Sport, an innovative sports drink that is the first of its kind to combine three cutting edge ingredients: EMIQ, Carbohydrate Complex, and EGCG. Odin Brands and Mahaska maintain a strategic bottling and distribution partnership.',
	        	'Prior to his current roles, Muhl spent eight years on Wall Street as an equity portfolio manager where he focused on healthcare equities. He continues his investment activities by way of The B Group, his own long-short equity investment company that specializes in biotechnology, genetic sequencing, and molecular diagnostics opportunities. In recent years, The B Group has broadened its mandate to include private investments. As a result, Muhl serves as Co-Manager of The Greystone & Santa Barbara Hotel redevelopment project in Miami Beach, FL.',
	        	'Muhl holds a Bachelor’s degree from The University of Michigan Stephen M. Ross School of Business where he graduated Summa Cum Laude.'
	        ]
	    },
	    {
	        link: 'Pam-Willard',
	        title: 'Chief Financial Officer (CFO)',
	        img: 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/pam_zpsa2fdd1e4.jpg~original',
	        content: [
	        	'As CFO of Mahaska, Pam Willard is responsible for all accounting functions, financial reporting, acquisition analysis, audit and tax functions, 401(k) plan administration, and special projects. Willard joined Mahaska in Feb 2000 as the Company Controller and was later promoted to Chief Financial Officer. She has been instrumental in putting controls in various processes and improving the accuracy of financial reportin', 
				'Prior to her current role, Willard spent 4 years working in the farm machinery industry, 2 years in commercial framing manufacturing (mainly for strip shopping centers), 11 years in the commercial HVAC industry, 2 years in public transportation, and 2 years in light manufacturing. Growing up she sold garden seeds door to door, held a newspaper route, picked up rocks for farmers and worked in her Mother’s restaurant– where Pepsi was a staple. In Jr. college Willard worked for Meredith Corporation in their Real Estate division.',
				'Willard holds a Bachelor’s degree in Accounting from Missouri State University (formerly Southwest Missouri State University) where she graduated Cum Laude.',
				'In her spare time, Willard enjoys traveling, working in her yard/ landscaping, reading, and spending time with family and friends.'	        
			]
	    },
	    {
	        link: 'Chad-Irving',
	        title: 'Chief Marketing Officer (CMO)',
	        img: 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/chad_zps845e0e87.jpg~original',
			content: [
				'As Chief Marketing Officer of Mahaska, Chad Irving is responsible for Mahaska’s marketing strategy. This includes marketing communication, market research, distribution management, product development as well as sales management and pricing with a strong focus on long term growth and business expansion. Irving has been with Mahaska since 1999 in several different roles with the company. Previous to his current position Irving served for 6 years as the Marketing Director for the Iowa franchise of Mahaska where he specialized in brand development and creation of marketing plans to achieve long term growth potential for the Iowa franchise.',
				'Irving spent previous time at Mahaska as a Route Director for the Iowa franchise where he managed critical customer relationships while streamlining distribution systems. Previous to Mahaska, Irving spent 8 years with SuperValu Foods as a food specialist and store manager based out of Des  Moines, IA headquarters where he helped implement Category Management processes into the food corporations distribution system.',
				'In addition to his role at Mahaska, Irving also serves as brand manager for Odin Brands, an endurance-focused food and beverage company specializing in athletic products.',
				'Irving graduated from Indian Hills College Telecom Engineering School with a degree in Applied Technology.'
			]
	    },
	    {
	        link: 'Bob-Boeckman',
	        title: 'General Manager (NE)',
	        img: 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/About/bob_zps37fa55d3.jpg~original',
			content: [
				'As General Manager of Mahaska Norfolk NE, Bob Boeckman is responsible for the daily operation sales management and distribution of soft drinks in the Norfolk, O’Neill and Humboldt NE facilities. Boeckman has been with Mahaska since May 1976. Previous to his current position he acted as Sales Manager in charge of marketing plans, routing, and setting sales goals. He held this position for 8 years.',
				'Boeckman spent 7 years prior to being sales manager as a route director in charge of managing soft drink routes in Norfolk and O’Neill. Prior to that Boeckman spent 3 years in route sales when he developed relationships with many customers in the area he covered.',
				'Boeckman enjoys hunting, working on his muscle cars, and going to car shows.'
			]
	    },
	    {
	        link: 'Andy-Davis',
	        title: 'General Manager (IA)',
	        img: 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/andy_zps43e3675d.jpg~original',
	        content: [
	        	'As GM for the Mahaska Franchise in Oskaloosa, Iowa, Andrew Davis is continuously looking for new and better ways to improve operations. Hired in August of 1983 by Bradley Muhl, Davis was assigned a sales territory in the southern area of the Franchise. He quickly grasped the knowledge needed to increase the distribution of the current portfolio of brands and with that knowledge came the needed sales increases. After 5 years of route experience, Davis was promoted to Route Director of the northern territory where he was in charge of Mahaska’s Newton warehouse and 4 route salesmen.',
	        	'In 1989 Bradley Muhl gave Davis added responsibility by challenging him to take on the role of Food Service Manager. Tasked to increase the fountain business, Davis put together programs that increased cup sizes, told the true story about Coke fountain and implemented bounties that escalated the cola wars! Then in the fall of 1990, Davis made another step up the ladder when he was given the position of Sales Manager. Under this responsibility Davis placed the first snack machine which was the very beginning of Snack Express, Mahaska’s full line vending company.',
	        	'As Mahaska continued to change and grow, Davis was given the position of General Manager in 1993 at the ripe old age of 33. He has since helped research and implement software from Salient Corporation, Descartes (High Jump), Rutherford (MEI) in efforts to help provide tools that enable Mahaska to run as efficiently as possible.',
	        	'A graduate of William Penn University in Oskaloosa with a Bachelor’s degree in Business Management and Industrial Technology, Davis is also a graduate of multiple Dale Carnegie courses. Davis spends his free time hunting, fishing, golfing and growing Christmas trees. His favorite saying is “If you don’t use it, you lose it”!'
	        ]
	    },
	    {
	        link: 'Jim-Frush',
	        title: 'General Manager (KS)',
	        img: 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/mahaskaprod/About/jim_zps379af1e7.jpg~original',
	        content: [
	        	'As GM for the Mahaska Franchise Headquartered in Salina, Kansas, Jim Frush is responsible for improving both sales volumes and operations efficiency in all facets of Mahaska’s businesses. Growing up and in Oskaloosa, Iowa, Frush had several paper routes and spent several years in the grocery business doing everything from stocking and carrying out groceries to Night Manager. Hired by Mahaska Bottling Co, in Oskaloosa in August of 1982, Frush accepted a Route Sales position in Ottumwa and Fremont Iowa. He used his knowledge of the grocery business to increase the sales and distribution of Mahaska’s products in his grocery and convenience stores to build sales and won Salesman of the Year Awards back to back. He then was recruited to change sales territories and accepted the Knoxville, IA Territory, where he won 3 more Salesmen of the Year Awards over the next 6 years.',
	        	'Frush then accepted the position of Route Director, with supervisory responsibilities over 4 Route Salespeople and a Mahaska Warehouse in Centerville, Iowa. Before one year passed, Frush was approached by Bradley Gilbert Muhl and offered another promotion, Marketing Director, in Mahaska’s Salina, KS plant. Frush’s responsibilities were to manage a sales force of over 3 dozen people, increase distribution and sales and importantly, morale. He accomplished these goals and was then recruited to perform the same functions for the entire company, for three years as General Market Manager, and then 10 more years as Vice President of Sales and Marketing.  Frush was responsible for all customers, local and corporate, initiated several innovative sales incentives and programs that resulted in increased sales and profits.',
	        	'When the position of General Manager for the Kansas operation became unexpectedly open in 2009, Frush assumed those responsibilities, in addition to the Sales and Marketing responsibilities for all of Mahaska. Frush Graduated from Oskaloosa High School, took night classes for Real Estate, and graduated from Drake University in Des Moines, IA.  In addition, he has taken dozens of sales and business training courses over the years. Frush enjoys golf, hunting and fishing.'
	        ]
	    }
	    ];
	  	return officers;
	};
}]);

window.app.factory('getOfficer', ['officersSrvc', function (officersSrvc) {
	return function (link) {
		var officers = officersSrvc();
		var officer = {};
		officers.forEach(function (obj) {
			if (obj.link === link) { officer = obj; }
		});
		return officer;
	};
}]);

window.app.factory('getName', [function () {
	return function (link) {
		return link.replace('-',' ');
	};
}]);

  



