/*-------------------------------------------------------------
    @author : Taylor McPherson
    web Porfolio for Eliza Siegel (the wonderful, the GREAT!)
    
    script.html : jQuery and javaScript functions for website

    @date : Summer 2019

---------------------------------------------------------------*/

$(document).ready(function() {
	$(".aImg").click(function() {
		denoise();
		$(this).show();
		$(this).css({"margin-top":"3%", "width":"70%", "margin-bottom":"1%",
		"margin-left":"15%", "margin-right":"50%"});
		imgView();
	})

	$("#backButton").click(function() {
		reset();
	})

})


function denoise() {
	$(".navBar, .aImg, .albumDescrip").hide();
}

function imgView() {
	$("#backButton").show();
	$(".bwContent, .col").css({"margin-top": "0"});
	$("body").css({"background":"rgba(255, 255, 255, .5)"});
}

function reset() {
	$(".aImg, .bwContent, .col, body").removeAttr("style");
	$(".navBar, .aImg, .albumDescrip").show();
	$("#backButton").hide();
}

