//State for the Title state
var TitleState = {
	// A debug library which appears below the game displaying some information
	init: function() {
		this.game.add.plugin(Phaser.Plugin.Debug);
	},
	preload: function() {
		startTimer = timeCheck = game.time.now;
	},

	create: function() {
		//Place the background image
		background = game.add.sprite(0,0,'background');

		//Create a group: clouds which will scroll across the screen
		clouds = game.add.group();
		clouds.enableBody = true;

		//Create some clouds to display on startup
		for (var i = 0; i < 20; i++) {
			this.cloudSetUp();
		}

		// Place the 'floor' which the dome will land on
		floor = game.add.sprite(0, game.world.height -10, 'floor');
		floor.enableBody = true;
		game.physics.arcade.enable(floor);
		floor.body.immovable = true;
		

		// Create a dome which falls from outside the game
		// screen and lands on the floor, bouncing slightlly
		dome = game.add.sprite(this.game.world.centerX, -200, 'dome');
		dome.anchor.setTo(0.5, 0.5);
		dome.enableBody = true;
		game.physics.arcade.enable(dome);

		// Now the title Graphic falls down on top of the dome
		title = game.add.sprite(130, -300, 'title');
		game.physics.arcade.enable(title);
		title.enableBody = true;

		
		
	},
	update: function() {
		
		//Generate Clouds
		cloudIncrement = (Math.random() * 5000) + 1000;
		// Generate a cloud at random intervals
		if (game.time.now - timeCheck > cloudIncrement) {
			this.cloudGen();
			timeCheck = game.time.now;
		}

		// Collision checks for dome and title
		collision1 = game.physics.arcade.collide(dome, floor);
		collision2 = game.physics.arcade.collide(dome, title);

		// Drop the title text once the 
		if(collision1) {	
			title.body.gravity.y = 200;
			title.body.bounce.y = 0.3;
		}

		// Display start text after a timer
		if (game.time.now - startTimer > 3000) {
			dome.body.bounce.y = 0.3;
			dome.body.gravity.y = 300;
		}

		// Display text Requesting spacebar press
		if (game.time.now - startTimer > 10000) {
			style = { font: "32px Arial", fill: "#ffffff", align: "center" };
			text = this.game.add.text(dome.x,dome.y, 'Press Space Bar', style);
			text.anchor.setTo(0.5, 0.5);

			spacebar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

			spacebar.onDown.add(this.nextState, this);
		}

	},

	cloudSetUp: function() {
		// Generate random cloud altitude Y
		randomNumber = Math.random();
		if (randomNumber < 0.25) {
			cloudHeight = 60;
		} else if (randomNumber < 0.50) {
			cloudHeight = 90;
		} else if (randomNumber < 0.75) {
			cloudHeight = 115;
		} else {
			cloudHeight = 145;
		}

		//Generate random cloud X position
		cloudPosition = (Math.random() * 640);

		// Randomly choose one of 3 cloud templates
		randomNumber = Math.random();
		if (randomNumber < 0.2) {
			cloud = clouds.create(cloudPosition, cloudHeight, 'cloud1');
			cloud.scale.setTo(0.5);
		}else if (randomNumber < 0.5) {
			cloud = clouds.create(cloudPosition, cloudHeight, 'cloud1');
		} else if (randomNumber < 0.75) {
			cloud = clouds.create(cloudPosition, cloudHeight, 'cloud2');
			cloud.scale.setTo(0.5);
		} else if (randomNumber < 0.95) {
			cloud = clouds.create(cloudPosition, cloudHeight, 'cloud2');
		} else {
			cloud = clouds.create(cloudPosition, cloudHeight, 'cloud3');
			cloud.scale.setTo(0.75);
		}

		// Randomly choose one of 3 cloud speeds
		randomNumber = Math.random();
		if (randomNumber < 0.33) {
			cloudSpeed = -10;
		} else  if (randomNumber < 0.66) {
			cloudSpeed = -15;
		} else  {
			cloudSpeed = -20;
		}
		cloud.body.velocity.x = cloudSpeed;

	},

	cloudGen: function() {
		// Generate random cloud altitude
		randomNumber = Math.random();
		if (randomNumber < 0.25) {
			cloudHeight = 60;
		} else if (randomNumber < 0.50) {
			cloudHeight = 90;
		} else if (randomNumber < 0.75) {
			cloudHeight = 115;
		} else {
			cloudHeight = 145;
		}

		// Randomly choose one of 3 cloud templates
		randomNumber = Math.random();
		if (randomNumber < 0.2) {
			cloud = clouds.create(game.world.width, cloudHeight, 'cloud1');
			cloud.scale.setTo(0.5);
		}else if (randomNumber < 0.5) {
			cloud = clouds.create(game.world.width, cloudHeight, 'cloud1');
		} else if (randomNumber < 0.75) {
			cloud = clouds.create(game.world.width, cloudHeight, 'cloud2');
			cloud.scale.setTo(0.5);
		} else if (randomNumber < 0.95) {
			cloud = clouds.create(game.world.width, cloudHeight, 'cloud2');
		} else {
			cloud = clouds.create(game.world.width, cloudHeight, 'cloud3');
			cloud.scale.setTo(0.75);
		}

		// Randomly choose one of 3 cloud speeds
		randomNumber = Math.random();
		if (randomNumber < 0.33) {
			cloudSpeed = -10;
		} else  if (randomNumber < 0.66) {
			cloudSpeed = -15;
		} else  {
			cloudSpeed = -20;
		}
		cloud.body.velocity.x = cloudSpeed;
	},

	nextState: function() {
		game.state.start('loadWorld');
	}


}; 




