 'use strict';

angular.module('mytodoApp')
  .controller('blog', function ($scope,$location,dataservice) {
  	$scope.hi = function () {


	      dataservice.hi().then(
	        function (userData) {
	        	
	        	var processed_json = new Array(); 
	        	for (var i = userData.length - 1; i >= 0; i--) {
	        		processed_json.push(userData[i].translator,parseInt(userData[i].polarityval));        	
	        	};
                Highcharts.setOptions({
 colors: ['#3DDB1A','#383A38','#F71703']
});
	        	$('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Translators Performance Graph Based On Sentimental Analysis  '
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,                    
                    style: {
                        color: 
                        (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Polarity',
            data: [['Positive Reviews',userData.positive],['Neutral Reviews',userData.neutral],['Negative Reviews',userData.negative]
            ]
            
                
        }]
    }); 	 
	   
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	  };

  	$scope.v=false;
$scope.details = function () {


	     
	      dataservice.details1().then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection3 = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	  };
  	$scope.blog = function () {
  		var ao = {};
  		$scope.v= true;
  	    var obj;
	    ao.name = $scope.name;
	    ao.comment = $scope.comment;

	    if (ao) {
	      dataservice.blog(ao).then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection2 = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      );
	    } 
  };
  $scope.author = function () {


	     
	      dataservice.author().then(
	        function (userData) {
	        	//obj = JSON.parse(userData);


	        	$scope.collection = userData;
	        },
	        function (error) {
	          $scope.contactError = error;
	        }
	      
	  );

	  }
});

 
	       
  
  
