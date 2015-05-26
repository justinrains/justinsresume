(function() {
  var app = angular.module('homeapp', []);
  var resume = angular.module('resumeapp', []);

  app.controller('PagesController', function() {
    this.thepages = pages;
	this.site = thissite;
  });
  var pages = [
  {
    name	: 'Resume in html',
	url		: 'resume.html',
	target	: '_self',
	active	: true
  },
  {
    name	: 'PDF Format (dropbox)',
	url		: 'https://www.dropbox.com/s/2rwzi7o13jqkgrv/justin-rains-resume.pdf?dl=0',
	target	: '_blank',
	active	: true
  },
  {
    name	: 'Word Format (Dropbox)',
	url		: 'https://www.dropbox.com/s/66j6xj0jstt7i45/justin-rains-resume.doc?dl=0',
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
	name	: 'My personal site',
	url		: 'http://www.justinrains.com/',
	target	: '_blank',
	active	: true
  },
  {
    name	: 'Portal Planet',
	url		: 'http://portalplanet.net',
	target	: '_blank',
	active	: true
  }
  ];
  var thissite = [
  {
    text	: 'Is running on an Amazon AWS instance'
  },
  {
    text	: 'Uses HTML5 boiletplate'
  },
  {
    text	: 'Uses Bootstrap for responsiveness'
  },
  {
    text	: 'Uses AngularJS to pull in data'
  }
  ]
})();