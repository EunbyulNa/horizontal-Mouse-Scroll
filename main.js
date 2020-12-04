$(document).ready(function() {

var lastScrollTop = 0;    //마지막 상태의 스크롤 값을 할당
var roadLength = $(".changeBg").width();    //전체 가로 값 : 15000px

$("body").css("height",roadLength);

$(window).scroll(function(){
var wWidth = $(window).width();             //현재 화면의 가로 값
var wHeight = $(window).height();           //현재 화면의 세로 값
var scrollTop = $(window).scrollTop();      //현재 화면의 스크롤 값
var dHeight = $("body").height() - wHeight; //전체 세로 값 - 현재 화면의 세로 값
var wRoad =  roadLength - wWidth;           //전체 가로 값 - 현재 화면의 가로 값
var step =  wRoad/dHeight;                  //전체 가로 값/전체 세로 값
var goLeft = scrollTop * step;

$(".changeBg").css({ "transform":"translateX(-"+goLeft+"px)" });
clearTimeout($.data(this,"scrollCheck"));   //움직임을 더 부드럽게
lastScrollTop = scrollTop;
});


});
