// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + bleedPadW;
var bleedYmin = 0;
var bleedYmax = cardH + bleedPadH;

// dims for centered card area
var cardXmin = 0 + bleedPadW * 0.5;
var cardXmax = cardW;
var cardYmin = 0 + (bleedPadH * 0.5);
var cardYmax = cardH;

// dims for centered padding area
var padXmin = 0 + bleedPadW;
var padXmax = cardW - bleedPadW;
var padYmin = 0 + bleedPadH;
var padYmax = cardH - bleedPadH;


function setup() {
	createCanvas(cardW+bleedPadW, cardH+bleedPadH); // width and height of my canvas
	stroke("blue");
	rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
	stroke("purple");
	rect(cardXmin, cardYmin, cardXmax, cardYmax); // centered
	stroke("green");
	rect(padXmin, padYmin, padXmax, padYmax); // centered
	background(153, 76, 0, 120);
	noStroke();

	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(cardH/10);
	fill(255, 102, 102);
	textSize(fontSizeA);
	textFont("Herculanum")
	text("LOUISENNE", padXmin+bleedPadW, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/25); // maintain aspect ratio with text too
	fill(0, 76, 153);
	textSize(fontSizeNorm);
	text("Karen Lo", padXmin+bleedPadW, padYmax*0.55);
	fill(204, 102, 0); // note color values - try to improve with cymk-style colors
	text("Penny Lane", padXmin+bleedPadW, (padYmax*0.55)+fontSizeA);
	fill(255, 102, 102); // note 4th value is alpha (transparency)
	text("0970543526", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*2));
	fill(255, 255, 102);
	text("It's a banana", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*3));
	fill(153, 0, 76);
	text("The weather looks nice", padXmin+bleedPadW, (padYmax*0.55)+(fontSizeA*4));

	// create graphic for CEO figure
	
	
	// create graphic not CEO figures
	ellipse(256, 246, 55, 55);
	//
	ellipse(564, 255, 55, 55);
	//
	ellipse(50, 50, 55, 55)
	//
	ellipse(470, 390, 55, 55)
	//
	ellipse(360, 80, 55, 55)
	//
	ellipse(600, 68, 55, 55)

	// more not-CEO figures - Only need to change 3 parameters
	

	// more not-CEO figures - Only need to change 3 parameters
	

	
}

function draw() {


}