<!--
window.addEventListener('load', function () {
  // Get the canvas element.
  var elem = document.getElementById('cityscape');
  if (!elem || !elem.getContext) {
    return;
  }
 
  // Get the canvas 2d context.
  var context = elem.getContext('2d');
  if (!context) {
    return;
  }
 
  context.fillStyle   = '#000';
  context.lineWidth   = 4;
 
	// BUILDING ONE
	context.beginPath();
	context.moveTo(10, 150);
	context.lineTo(10, 140);
	context.lineTo(20, 140);
	context.lineTo(20, 110);
	context.lineTo(50, 110);
	context.lineTo(50, 140);
	context.lineTo(60, 140);


	// BUILDING TWO
	context.lineTo(60, 123);
	context.lineTo(70, 123);
	context.lineTo(70, 78);
	context.lineTo(100, 78);
	context.lineTo(100, 145);
	
	//BUILDING THREE
	context.lineTo(110, 145);
	context.lineTo(113, 50);
	context.lineTo(120, 50);
	context.lineTo(122, 145);
	
	//BUILDING FOUR
	context.lineTo(130, 145);
	context.lineTo(133, 50);
	context.lineTo(140, 50);
	context.lineTo(142, 145);


	// BUILDING FIVE
	context.lineTo(152, 145);
	context.lineTo(152, 110);
	context.lineTo(160, 110);
	context.lineTo(160, 90);
	context.lineTo(170, 90);
	context.lineTo(170, 110);
	context.lineTo(190, 110);
	context.lineTo(190, 130);
	context.lineTo(210, 130);
	context.lineTo(210, 140);
	context.lineTo(230, 140);

	// BUILDING SIX
	context.lineTo(230, 120);
	context.lineTo(250, 120);
	context.lineTo(250, 100);
	context.lineTo(300, 100);
	context.lineTo(300, 120);
	context.lineTo(320, 120);
	context.lineTo(320, 140);
	context.lineTo(340, 140);
	
	
	// BUILDING SEVEN
	context.lineTo(340, 90);
	context.lineTo(370, 80);
	context.lineTo(400, 90);
	context.lineTo(400, 145);
	context.lineTo(410, 145);

	// BUILDING EIGHT
	context.lineTo(410, 90);
	context.lineTo(440, 90);
	context.lineTo(440, 135);
	context.lineTo(450, 135);
	

	// BUILDING NINE
	context.lineTo(450, 90);
	context.lineTo(460, 90);
	context.lineTo(460, 100);
	context.lineTo(470, 100);
	context.lineTo(470, 130);
	context.lineTo(480, 130);
	context.lineTo(480, 140);
	context.lineTo(490, 140);

	// BUILDING TEN
	context.lineTo(490, 90);
	context.lineTo(500, 90);
	context.lineTo(500, 80);
	context.lineTo(505, 80);
	context.lineTo(505, 90);
	context.lineTo(510, 90);
	context.lineTo(510, 80);
	context.lineTo(515, 80);
	context.lineTo(515, 135);
	context.lineTo(520, 135);

	// BUILDING ELEVEN
	context.lineTo(520, 60);
	context.lineTo(530, 60);
	context.lineTo(530, 70);
	context.lineTo(540, 70);
	context.lineTo(540, 145);
	context.lineTo(560, 145);

	// BUILDING TWELVE
	context.lineTo(562, 55);
	context.lineTo(567, 55);
	context.lineTo(570, 145);
	context.lineTo(580, 145);
	
	//BUILDING THIRTEEN
	context.lineTo(580, 135);
	context.lineTo(585, 135);
	context.lineTo(587, 40);
	context.lineTo(592, 40);
	context.lineTo(594, 135)
	;context.lineTo(600, 135);

	// BUILDING FOURTEEN
	context.lineTo(602, 40);
	context.lineTo(607, 40);
	context.lineTo(610, 135);
	context.lineTo(625, 135);
	context.lineTo(625, 150);
	context.lineTo(0, 150);




  context.fill();
  context.closePath();
}, false);
    // -->
