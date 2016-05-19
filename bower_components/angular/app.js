(function (){
	var app = angular.module('generic', []);
	app.controller('GenericLogin', function(){
	});
	app.controller('PanelController', function(){
		this.tab=1;
		this.selectTab=function(setTab){
			this.tab=setTab;
		};
		this.isSelected=function(checkTab){
			return this.tab===checkTab;
		};
	});
})();

