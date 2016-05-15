(function() {
  var app = angular.module('homeapp', []);
  var resume = angular.module('resumeapp', []);

  app.controller('PagesController', function() {
    this.thepages = pages;
	this.site = thissite;
	this.portfolio = portfolio;
  });
  var pages = [
  {
    name	: 'Justin\'s Resume',
	url		: 'resume.html',
	target	: '_self',
	active	: true
  },
  {
    name	: 'PDF Format',
	url		: '/resume/justin-rains-resume.pdf?dl=0',
	target	: '_blank',
	active	: true
  },
  {
    name	: 'Word Format',
	url		: '/resume/justin-rains-resume.doc?dl=0',
	target	: '_blank',
	active	: true
  },
  {
    name	: 'This site on github',
	url		: 'https://github.com/justinrains/justinsresume',
	target	: '_blank',
	active	: true
  },
  {
    name	: 'Wordpress Google Analytics Plugin',
	url		: 'https://wordpress.org/plugins/simple-google-analytics-manager/',
	target	: '_blank',
	active	: true
  },
  {
    name	: 'Wordpress Google Tag Manager Plugin',
	url		: 'https://wordpress.org/plugins/simple-google-tag-manager/',
	target	: '_blank',
	active	: true
  },
  {
	name	: 'My personal site',
	url		: 'http://www.justinrains.com/',
	target	: '_blank',
	active	: true
  },
  {
    name	: 'Portal Planet',
	url		: 'http://portalplanet.net',
	target	: '_blank',
	active	: false
  }
  ];
  var thissite = [
  {
    text	: 'Uses Bootstrap for responsiveness'
  },
  {
    text	: 'Uses AngularJS to pull in data'
  },
  {
    text	: 'Is running on an Amazon AWS instance'
  }//,
//  {
//    text	: 'Uses Modernizr'
//  }
  ];
  var portfolio = [
  {
    name	: "Portal Planet",
	url		: "http://portalplanet.net/",
	target 	: "_blank",
	description	: "WordPress site using a responsive theme for mobile-readyness.",
	active		: true
	},
  {
    name	: "Advanced Outdoor Lighting",
	url		: "http://advancedoutdoorlighting.net/",
	target 	: "_blank",
	description	: "WordPress site using a responsive (bootstrap) theme.",
	active		: true
	},
  {
    name	: "Ken Hayden Roofing",
	url		: "http://roofs4you.com/",
	target 	: "_blank",
	description	: "WordPress site using a responsive theme for mobile-readyness.",
	active		: true
	},
  {
    name	: "Camping and Outdoors Blog",
	url		: "http://www.greatwildoutdoors.com/",
	target 	: "_blank",
	description	: "WordPress site using the Thesis theme.",
	active		: true
  }
  ]
})();