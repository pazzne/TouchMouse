(function(w,a){
	var app = a.module("myApp",[]);
	app.controller("myControl",function($scope,$interval,$timeout){
		$scope.page1 = true;
		$scope.page2 = false;
		$scope.page3 = false;
		$countTime = 3;//游戏时间
		$scope.score = 0;
		$scope.ranNum = "";//随机数
		$scope.begin = function(){
			//点击开始执行页面2内的东西
			$scope.page2 = true;
			$scope.countText = "倒计时";
			$scope.countTime = 3;
			var interOne = $interval(function(){
				$scope.countTime = $scope.countTime-1;//倒计时-1
				if($scope.countTime == 0){
					$interval.cancel(interOne);
					$scope.myFunc();//当倒计时结束后，就执行myFunc函数
				}
			},1000); 
			$scope.myFunc = function(){
				$scope.countTime = 10;
				$scope.countText = "剩余时间";
				//游戏时间倒计时，地鼠延迟出现后，进行随机换地鼠出洞的图片,根据随机，换图片，延迟地鼠入洞时间，当时间为0时,跳转到page3，延迟1.2秒，清除延迟和interval
				var interThree = $interval(function(){
					console.log($scope.ranNum);
					$scope.countTime -= 1;
					$scope.ranNum = Math.floor(Math.random()*20);//随机数生成
					$scope.many[$scope.ranNum].imgUrl = "img/img2.png";
					var outOne = $timeout(function(){
						$scope.many[$scope.ranNum].imgUrl = "img/img1.png";
						$timeout.cancel(outOne);
					},1300)
					if($scope.countTime == 0){
						//当game time为0时，延迟1.2秒再跳转page3
						var outTwo = $timeout(function(){
							$scope.page3 = true;
							$interval.cancel(interThree);
							$timeout.cancel(outTwo);
						},1000)
					};
				},1350)
			};
			/*myFunc-end*/
			$scope.imgClick = function(id){
				//如果ID = 随机数，就换取敲打的照片，分数加10分
				if(id == $scope.ranNum){
					$scope.many[id].imgUrl = "img/img44.png";
					$scope.score += 10;
				}
			}
			/*clickMouse-end*/
			$scope.endClick = function(){
				$scope.page1 = true;
				$scope.page2 = false;
				$scope.page3 = false;
				$countTime = 2;//游戏时间
				$scope.score = 0;
				$scope.ranNum = "";
			};
		};
		//以下是地鼠洞的数组
		$scope.many = [	{id:1,imgUrl:"img/img1.png",state:false},
					{id:2,imgUrl:"img/img1.png",state:false},
					{id:3,imgUrl:"img/img1.png",state:false},
					{id:4,imgUrl:"img/img1.png",state:false},
					{id:5,imgUrl:"img/img1.png",state:false},
					{id:6,imgUrl:"img/img1.png",state:false},
					{id:7,imgUrl:"img/img1.png",state:false},
					{id:8,imgUrl:"img/img1.png",state:false},
					{id:9,imgUrl:"img/img1.png",state:false},
					{id:10,imgUrl:"img/img1.png",state:false},
					{id:11,imgUrl:"img/img1.png",state:false},
					{id:12,imgUrl:"img/img1.png",state:false},
					{id:13,imgUrl:"img/img1.png",state:false},
					{id:14,imgUrl:"img/img1.png",state:false},
					{id:15,imgUrl:"img/img1.png",state:false},
					{id:16,imgUrl:"img/img1.png",state:false},
					{id:17,imgUrl:"img/img1.png",state:false},
					{id:18,imgUrl:"img/img1.png",state:false},
					{id:19,imgUrl:"img/img1.png",state:false},
					{id:20,imgUrl:"img/img1.png",state:false}]
	});
})(window,angular)