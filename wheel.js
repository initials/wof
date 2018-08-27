
var game = new Phaser.Game(600, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render  }, false, false);

function preload() {

	game.load.spritesheet('wheel_sprite', 'wheel.png', 220, 220);


}

//-----------------------------
var DEBUG_MODE = false;
//-----------------------------

var score = 0;
var wheel;

var otherTextBubbleLetters;
var bubbleDict = { 	"A":33,"B":34,"C":35,"D":36,"E":37,"F":38, 
					"G":39,"H":40,"I":41,"J":42,"K":43,"L":44,
					"M":45,"N":46,"O":47,"P":48,"Q":49,"R":50, 
					"S":51,"T":52,"U":53,"V":54,"W":55,"X":56,
					"Y":57,"Z":58,
					"0":16,"1":17,"2":18,"3":19,"4":20,"5":21, 
					"6":22,"7":23,"8":24,"9":25,
				};

function create() {
	wheel = game.add.sprite(game.world.centerX, game.world.centerY, 'wheel_sprite');
	game.physics.enable(wheel, Phaser.Physics.ARCADE);
	//wheel.body.angularVelocity = 1300 + (Math.random() * 100);

	wheel.body.angularDrag = 300;

	wheel.pivot.x=110;
	wheel.pivot.y=110;
	// wheel.x=200;
	// wheel.y=200;
	
	
	//wheel.body.velocity.x=100;
}

function makeWord(x,y,textString)
{
	var res = textString.split("");

	for (var i = 0; i < res.length; i++)
    {
        levelText = scoreTextBubbleLetters.create(x + (i*16), y, 'bubbleFont');
        levelText.fixedToCamera = true;
        game.physics.enable(levelText, Phaser.Physics.ARCADE);
        levelText.frame = bubbleDict[res[i]]
    }
}

function makeOtherWord(x,y,textString)
{
	var res = textString.split("");

	for (var i = 0; i < res.length; i++)
    {
        levelText = otherTextBubbleLetters.create(x + (i*16), y, 'bubbleFont');
        levelText.fixedToCamera = true;
        game.physics.enable(levelText, Phaser.Physics.ARCADE);
        levelText.frame = bubbleDict[res[i]];
        
        levelText.body.acceleration.x=((10 + y) + (i * 30)) * -1;

    }
}


function render() {
	
}



function update() 
{
	//game.input.onDown.add(gofull, this);
	game.input.onDown.add(spinTheWheel, this);

}



function spinTheWheel() {
	if (wheel.body.angularVelocity == 0){ 
		wheel.body.angularVelocity = 500 + (Math.random() * 100);
	}

	

}
function gofull() {

    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }

}

