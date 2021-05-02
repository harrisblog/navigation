// 网页刷新时判断系统时间，适配深浅模式
window.onload = function checkTime() {
	var t = new Date().getHours();
	if (t >= 18 || t <= 6) {
		document.body.classList.add('night');
		document.cookie = "night=1;path=/"
	} else {
		document.body.classList.remove('night');
		document.cookie = "night=0;path=/"
	}
}

// 鼠标滑过网址卡片、输入框触发背景模糊 -----------------------------开始
// 提示：一定要用querySelector来选择，用其它没效果
// var card = document.querySelectorAll('.box2');
// var bg = document.querySelector('.bg');
// var search = document.querySelector('.search')
// var speed;
// var timer = null;
// var timer1 = null;
// var blur = 0;
// var search_btn = document.querySelector('.search-btn') 
// 利用循环绑定注册事件
// for (var i = 0; i < card.length; i++) {
// 	card[i].onmouseout = function () {
// 		Blur(0);
// 	}
// 	card[i].onmouseover = function () {
// 		Blur(2.6);
// 	}
// }
// search.onmouseout = function () {
// 	Blur(0);
// }
// search.onmouseover = function () {
// 	Blur(2.6);
// }
// 匀速过渡 - 模糊
// function Blur(target) {
// 	clearInterval(timer);
// 	timer = setInterval(function () {
// 		target > blur ? speed = 0.1 : speed = -0.1;
// 		if (blur == target) {
// 			clearInterval(timer);
// 		}
// 		else {
// 			blur += speed;
// 			bg.style.filter = 'blur(' + blur + 'px)';
// 		}
// 	}, 8)
// }
// 鼠标滑过网址卡片、输入框触发背景模糊 -----------------------------结束

// 卖萌标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
	if (document.hidden) {
		$('[rel="icon"]').attr('href', "/img/favicon.ico");
		document.title = '(つェ⊂) 你脸上有点东西~~';
		clearTimeout(titleTime);
	} else {
		$('[rel="icon"]').attr('href', "/img/favicon.ico");
		document.title = '(*´∇｀*) 有点可爱~~  ' + OriginTitle;
		titleTime = setTimeout(function () {
			document.title = OriginTitle;
		}, 2000);
	}
});