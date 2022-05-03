$(document).ready(function(){
// 헤더 시작
    // 스크롤 최상단 위치에 따른 클래스 부여
    $(window).scroll(function(){
        if($(window).scrollTop()) {
            $(".ps-top").removeClass("top")
        } else {
            $(".ps-top").addClass("top")
        }
    })

    // 스크롤 내림 올림에 따른 클래스 부여
    $("html").on('mousewheel',function(e){ 
        var wheel = e.originalEvent.wheelDelta; 

        if(wheel > 0){ 
            //스크롤 올릴때
            $(".ps-top").removeClass("down")
        } else { 
            //스크롤  내릴때
            $(".ps-top").addClass("down")
        } 
    })

    // 메뉴 슬라이드
    $(".ps-top > .top-wrap > .menu > .gnb").mouseover(function(){
        $(this).children(".downMenu-wrap").stop().slideDown(220)
    })
    $(".ps-top > .top-wrap > .menu > .gnb").mouseleave(function(){
        $(this).children(".downMenu-wrap").stop().slideUp(220)
    })
// 헤더 끝

// 메인 비주얼 시작
    // 슬라이드 초기화
        // 페이지 초기 넘버 설정
        // 페이지 초기 트랙 설정
        // 첫화면 비디오 대기 시간 설정
	$('.mainVisual > .visual-wrap > .slides > .slide-page').on('init', function(event, slick){
        $(".mainVisual > .visual-wrap > .slides > .slide-num > .page-num").text("01")
		$(".mainVisual > .visual-wrap > .slides > .slide-num > .page-total").text("0" + slick.slideCount)

        $(".mainVisual > .visual-wrap > .slides > .slide-num > .page-track > .track").css({
            "width" : (100 / slick.slideCount) + "%"
        })

        setTimeout(function() {
            $('.mainVisual > .visual-wrap > .slides > .slide-page').slick("slickPlay")
        }, 52600)
	})

    // 슬라이더 기능
    $(".mainVisual > .visual-wrap > .slides > .slide-page").slick({
		autoplay: false,
		autoplaySpeed: 5000,
		arrows: false,
        pauseOnHover: false,
	})

    // 넘어가기 전
        // 페이지 넘버 관련
        // 페이지 트랙 관련
	$('.mainVisual > .visual-wrap > .slides > .slide-page').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".mainVisual > .visual-wrap > .slides > .slide-num > .page-num").text("0" + (nextSlide+1))

        $(".mainVisual > .visual-wrap > .slides > .slide-num > .page-track > .track").css({
            "width" : (100 / slick.slideCount) * (nextSlide+1) + "%"
        })
	})


    // 넘어간 후
        // 비디오 체크
    $('.mainVisual > .visual-wrap > .slides > .slide-page').on('afterChange', function(event, slick, currentSlide){
		let chk_video = slick.$slides[currentSlide].dataset.slideType

        if(chk_video == "video") {
            $('#ps-video')[0].currentTime = 0;
            $('.mainVisual > .visual-wrap > .slides > .slide-page').slick("slickPause")
            setTimeout(function() {
                $('.mainVisual > .visual-wrap > .slides > .slide-page').slick("slickPlay")
            }, 52600)
        }
	})

    // 슬라이드 이전/다음 버튼
    // 만약에 슬라이드가 멈춰있다면 버튼을 누를 경우 재생
	$(".mainVisual > .visual-wrap > .slides > .slide-btn > .prev").click(function(){
		$(".mainVisual > .visual-wrap > .slides > .slide-page").slick("slickPrev")

        if($('.mainVisual > .visual-wrap > .slides > .slide-page').slick("getSlick").paused) {
            $('.mainVisual > .visual-wrap > .slides > .slide-page').slick("slickPlay")
        }
	})
	$(".mainVisual > .visual-wrap > .slides > .slide-btn > .next").click(function(){
		$(".mainVisual > .visual-wrap > .slides > .slide-page").slick("slickNext")

        if($('.mainVisual > .visual-wrap > .slides > .slide-page').slick("getSlick").paused) {
            $('.mainVisual > .visual-wrap > .slides > .slide-page').slick("slickPlay")
        }
	})
// 메인 비주얼 끝

// 상품 소개 시작
    // 슬라이드 초기화
        // 초기 페이지 버튼에 액티브 부여
    $('.prdIntro > .intro-wrap > .slides > .slide-page').on('init', function(event, slick){
        $(".prdIntro > .intro-wrap > .slides > .slide-num > .btn").eq(0).addClass("active")
    })

    // 슬라이더 기능
    $(".prdIntro > .intro-wrap > .slides > .slide-page").slick({
		autoplay: false,
		arrows: false,
	})

    // 슬라이드 이전/다음 버튼
    $(".prdIntro > .intro-wrap > .slides > .slide-page .box > a > .img-box > .slide-btn > .prev").click(function(){
		$(".prdIntro > .intro-wrap > .slides > .slide-page").slick("slickPrev")
	})
	$(".prdIntro > .intro-wrap > .slides > .slide-page .box > a > .img-box > .slide-btn > .next").click(function(){
		$(".prdIntro > .intro-wrap > .slides > .slide-page").slick("slickNext")
	})

    // 넘어가기 전
        // 슬라이드 넘길 경우 클래스 부여 및 제거
	$('.prdIntro > .intro-wrap > .slides > .slide-page').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".prdIntro > .intro-wrap > .slides > .slide-num > .btn").removeClass("active")
        $(".prdIntro > .intro-wrap > .slides > .slide-num > .btn").eq(nextSlide).addClass("active")
	})

    // 페이지 넘버 클릭 시 이동
    $(".prdIntro > .intro-wrap > .slides > .slide-num > .btn").click(function(){
        let btn_idx = $(this).index()

        $(".prdIntro > .intro-wrap > .slides > .slide-page").slick("slickGoTo", btn_idx)
    })
})