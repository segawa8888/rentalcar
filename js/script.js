jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

      // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

      $(document).on('click', 'a[href*="#"]', function () {
        let time = 200;
        let header = $('header').innerHeight();
        let target = $(this.hash);
        if (!target.length) return;
        let targetY = target.offset().top - header;
        $('html,body').animate({ scrollTop: targetY }, time, 'swing');
        return false;
      });

  jQuery(function ($){
    $('.js-hamburger').on('click' , function(){
        if($(this).hasClass('open')){
            //ドロワーメニューが開いているときの処理
            $('.js-drawer').fadeOut();
            $(this).removeClass('open');
            //ドロワーメニューが開いているときはスクロールできない→base.scssに記述
            $('html').removeClass('fixed');
        } else {
             //ドロワーメニューが閉じているの処理
             $('.js-drawer').fadeIn();
             $(this).addClass('open');
             //ドロワーメニューが閉じているときはスクロールできる
             $('html').addClass('fixed');
        }
    });

	// 初期値を指定
	gsap.set('.js-target', {
		opacity: 0,
		y: 50,
	});
	
	ScrollTrigger.batch('.js-target', {
		onEnter: batch => gsap.to(batch, {
		opacity: 1, 
		y: 0, 
		stagger: 0.1,
		overwrite: true,
		}),
		start: 'top 70%',
	});

	$(function() {
		var number, total_number;
		var $input = $('#count .number');
		var $plus = $('#count .plus');
		var $minus = $('#count .minus');
	
		//合計カウント用関数
		function total() {
			total_number = 0;
			$input.each(function() {
				var val = Number($(this).val());
				total_number += val;
			});
			return total_number;
		}
	
		//ロード時
		$(window).on('load', function() {
			$input.each(function() {
				number = Number($(this).val());
				if (number == 0) {
					$(this).prev('.minus').prop("disabled", true);
				}
			});
			total();
		});
	
		//ダウンボタンクリック時
		$minus.on('click', function() {
			var $associatedInput = $(this).next('.number');
			number = Number($associatedInput.val());
			if (number > 0) {
				$associatedInput.val(number - 1);
				if ((number - 1) == 0) {
					$(this).prop("disabled", true);
				}
				$(this).next().next('.plus').prop("disabled", false);
			} else {
				$(this).prop("disabled", true);
			}
		});
	
		//アップボタンクリック時
		$plus.on('click', function() {
			var $associatedInput = $(this).prev('.number');
			number = Number($associatedInput.val());
			$associatedInput.val(number + 1);
			$associatedInput.prev('.minus').prop("disabled", false);
		});
	});
});

$('.time01').timepicker({
	'minTime': '0:00',
	'maxTime': '23:30',
	'step': 30,
});
$('.time02').timepicker({
	'minTime': '0:00',
	'maxTime': '23:30',
	'step': 30,
});

$(function() {
	$.datepicker.setDefaults($.datepicker.regional["ja"]);
	$("#date01").datepicker();
});

$(function() {
	$.datepicker.setDefaults($.datepicker.regional["ja"]);
	$("#date02").datepicker();
});


});
