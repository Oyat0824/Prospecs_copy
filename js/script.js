$(document).ready(function(){
    $(".ps-top > .top-wrap > .menu > .gnb").hover(function(){
        $(this).children(".downMenu-wrap").stop().slideToggle(250)
    })
})