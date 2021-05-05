var currentBox = 0;
var oldBox = 0;
var indexOfMaxValue = 0;
var revealText = "";
var lengthOfArray = $(".block").length+1;
var times = new Array(lengthOfArray).fill(0);
var end = false;


$(function scrollStuff() {
	addToTimesArray();
	
		$(window).scroll(function(){
		
			var heightOfWindow = document.documentElement.clientHeight;
			
			$('#blocks').children('.block').each(function(i) { 
			    var pos = this.getBoundingClientRect().top+this.getBoundingClientRect().height/2;
			    if( pos > heightOfWindow/8 && pos < heightOfWindow){
			        currentBox = i+1;
			        revealText = $(this).find($("h3")).text();
			        return false;
			    }
			});
			
			$('.test2').each(function(i) {
			  var pos = this.getBoundingClientRect().top + this.getBoundingClientRect().height/4.3;
			  if (pos > heightOfWindow / 8 && pos < heightOfWindow) {
			    end = true;
			  } else {
			    end = false;
			    return;
			  }
			});
		});
});


function reset() {
	currentBox = 0;
	oldBox = 0;
	times = new Array(lengthOfArray).fill(0);
	indexOfMaxValue = 0;
	lengthOfArray = $(".block").length+1;
	times = new Array(lengthOfArray).fill(0);
}


function addToTimesArray(){
	if (currentBox > 1 && end == false) {
		times[currentBox] += 1;
		indexOfMaxValue = times.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
		if ((indexOfMaxValue > 1) && (indexOfMaxValue<lengthOfArray) && (Math.max.apply(Math, times)>9)) {
			if (oldBox != indexOfMaxValue) {
				oldBox = indexOfMaxValue;
				$(".reveal").html(revealText);
				setTimeout(reset,1800);
			}
		}
	}	else {
		reset();
	}
	
	setTimeout(addToTimesArray,250);
}



