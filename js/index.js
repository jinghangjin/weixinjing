$(function(){
	
	var weixin = {
		
		//初始化
		init:function(){
			var hei = $('.swiper-container').height();
			var wid = $('.swiper-container').width();
			console.log(hei,wid);
			$('.swiper-wrapper').css({
				'height':hei,
				'width':wid+'!important'
			});
			$('.swiper-slide').css({
				'height':hei,
				'width':wid+'!important'
			});
			this.start();
			this.click();
			//this.eventLisener();
		},
		click:function(){
			//控制音乐的事件
			var contorl = true;
			$('.music').tap(function(){
				var music = document.querySelector('#music');
				if(contorl){
					$(this).addClass('addmusic');
					music.pause();
					$(this).css({
						'animation-play-state':'paused'
					});
					contorl = false;
				}else{
					$(this).removeClass('addmusic');
					music.play();
					$(this).css({
						'animation-play-state':'running'
					});
					contorl = true;
				}
			});
			//第三页的动态事件
			$('.four-animate1 .wind4').tap(function(){
				//alert(1);
				$(this).prop('src','img/lightOn.png');
				$(this).parent().parent().css({
					'background-color':'rgb(26,127,220)'
				});
				var box = $(this).parent().parent().find('.bimg4');
				box.removeClass('boxadd');
				$(this).parent().parent().find('.biao').addClass('biao4');
				$(this).parent().parent().find('.four-animate2,.four-animate3').addClass('boss');
				$(this).parent().parent().find('.four-animate4,.four-animate5').removeClass('boss');
				box.css({
					'animation-delay':'1500ms'
				}).prop('src','img/lightOnBg.jpg');
				setTimeout(function(){
					box.addClass('boxadd');
				},100);
			});
		},
		start:function(){
			var mySwiper = new Swiper ('.swiper-container', {
		   	direction: 'vertical',
		   	//effect : 'cube',
		   	loop: true,
			/*cube: {
			  slideShadows: true,
			  shadow: true,
			  shadowOffset: 100,
			  shadowScale: 0.6
			},*/
		   	onSlideChangeEnd:function(s){
		   		//console.log(s.activeIndex);
		   		var box = $('.box');
		   		for(var i=0;i<box.length;i++){
		   			if(i==s.activeIndex){
		   				box.eq(i).children().addClass('boxadd');
		   			}else{
		   				box.eq(i).children().removeClass('boxadd');
		   			}
		   			
		   		}
		   		
		   	}
		    // 如果需要分页器
		    //pagination: '.swiper-pagination',
		    
		    // 如果需要前进后退按钮
		   /* nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		    */
		    // 如果需要滚动条
		    //scrollbar: '.swiper-scrollbar',
		  });
		},
		eventLisener:function(){
			var _this = this;
			//件事浏览器窗口的变化
			var a= false;
			window.onresize=function(){
				//_this.start();
				a= true;
				console.log(window.innerWidth);
				console.log($(this).width());
			};
			if(a){
				_this.start();
				a= false;
			}
		}
	};
	weixin.init();
});
